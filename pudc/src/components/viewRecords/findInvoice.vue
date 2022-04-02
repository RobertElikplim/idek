<template>
		<div>
            <div class="container mt-3 mb-3 d-flex justify-content-center">
        <router-link :to="{ name: 'CreateInvoice' }" class="btn btn-success my-2" >Add New Invoice</router-link>
      </div>
      <!-- Search Option List -->
			<div>
				<div class="container m-3 d-flex">
					<label>Filter Invoice By:</label>
					<select class=".form-control-sm mx-3" v-model="searchBy">
						<option value="Client Name">Client Name</option>
						<option value="Client Number">Client Number</option>
					</select>
				</div>

        <!-- Show Input for Search by Name -->
				<div class="container d-flex" v-if="searchBy === 'Client Name'">
						<input class="mx-3" type="text" placeholder="Customer Name" v-model="nameInput" v-on:keyup.enter="handleSubmitForm" />
						<button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Client </button>
				</div>
				<!-- Show Input for Search by Name -->
				<div class="container d-flex" v-if="searchBy === 'Client Number'">
						<input class="mx-3" type="text" placeholder="Phone Number" v-model="phoneInput" v-on:keyup.enter="handleSubmitForm" />
						<button style="width: 10em" class="btn btn-primary btn-sm" @click="handleSubmitForm" type="submit"> Search Client </button>
				</div>
			</div>

      <hr class="mt-10 border-solid border-1" style="border-color: #7d0d15" />
      <!-- Invoice List and Results for Search -->
      <div class="container mt-3 mb-3 d-flex justify-content-center">
			<table style="width: 80%;" class="table table-bordered text-center table-hover table-sm col-md-8 alert-primary clearfix">
				<!-- <thead>
					<tr>
						<th>Invoice ID</th>
						<th>Customer Name</th>
						<th>Phone Number</th>
            <th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="invoice in queryData" :key="invoice.invoice_id">
						<td> {{ invoice.customerName }} </td>
						<td> {{ invoice.phone }} </td>
						<td> {{ invoice.invoice_id }} </td>
					</tr>
				</tbody> -->
        <thead>
        <tr>
          <th>Invoice ID</th>
          <th>Invoice Date</th>
          <th>Customer Name</th>
          <th>Phone Number</th>
          <th>Invoice Total</th>
          <th>Payment Status</th>
          <th>Pickup Status</th>
          <!-- <th>Ready Date</th> -->
          <th class="has-text-centered col-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invoice in queryData" :key="invoice.invoice_id">
          <td>{{ invoice.invoice_id }}</td>
          <td>{{ dateTime(invoice.invoice_date) }}</td>
          <td>{{ invoice.customerName }}</td>
          <td>{{ invoice.phone }}</td>
          <td>{{ invoice.invoice_total }}</td>
          <td>{{ invoice.payment_status }}</td>
          <td>{{ invoice.picked_up }}</td>
          <!-- <td>{{ dateTime(invoice.pick_up_date) }}</td> -->
          <td class="has-text-centered">
            <router-link :to="{ name: 'ViewInvoice', params: { id: invoice.invoice_id } }" class="btn btn-info is-small">View</router-link>
            <router-link :to="{ name: 'EditInvoice', params: { id: invoice.invoice_id } }" class="btn btn-warning is-small">Edit</router-link>
            <a class="btn btn-danger is-small " @click.prevent="deleteInvoice(invoice.invoice_id)">Delete</a>
          </td>
        </tr>
      </tbody>
			</table>
      </div>
		</div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
	data() {
			return {
				//All the data recieved from the query
				queryData: [],
				//Parameter for search to occur
				searchBy: "",
				nameInput: "",
				phoneInput: "",
			};
		},
		mounted() {
			let apiURL = `http://localhost:3000/invoiceList`;
			//Resets the list of queried data
			this.queryData = [];
			axios.get(apiURL).then((resp) => {
				let data = resp.data;
				for(let i = 0; i < data.length; i++) {
					this.queryData.push(data[i]);
				}
			});
		},
		methods: {
			handleSubmitForm() {
					let apiURL = "";
					//Checks which filters are needed for URL structure
					if(this.searchBy === "Client Name") {
						apiURL = `http://localhost:3000/invoiceList/name/${this.nameInput}`;
					} else if(this.searchBy === "Client Number") {
						apiURL = `http://localhost:3000/invoiceList/phone/${this.phoneInput}`;
					}
					//Resets the list of queried data
					this.queryData = [];
					axios.get(apiURL).then((resp) => {
						let data = resp.data;
						for(let i = 0; i < data.length; i++) {
							this.queryData.push(data[i]);
						}
					});
					//Resets all the variables
					this.searchQuery = "";
					this.nameInput = "";
					this.phoneInput = "";
				},
				editClient(clientID) {
					this.$router.push({
						name: "clientdetails",
						params: {
							id: clientID
						}
					});
				},
				async deleteInvoice(id) {
					try {
						if (window.confirm("Do you really want to delete?")){
						await axios.delete(`http://localhost:3000/invoices/${id}`);
						}
						window.location.reload();
					} catch (err) {
						console.log(err);
					}
					},
				dateTime(value) {
						return moment(value).format('MM-DD-YYYY');
					},
		},
};
</script>