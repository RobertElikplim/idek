<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Fill in the form below to add a new INVOICE</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="custID">
                        <option disabled value="">Customers List</option>
                        <option  v-for="customer in customerSelection" :value="customer.cust_id" :key="customer.cust_id" > {{customer.first_name +' '+ customer.last_name}}</option>
                    </select>
                </div>
                </div>
              </div>
            </div>

            <!--<div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="Date" v-model="invoiceDate" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-danger text-muted">
                   Invoice Date.
                </span>
              </div>
            </div>-->

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="number" placeholder="Enter Total Invoice Amount"  v-model="invoiceTotal" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-warning">
                    Total Invoice Amount
                </span>
              </div>
            </div>

            <div class="row  mt-1">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="number" placeholder="Enter Payment Amount"  v-model="paymentAmount" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-warning">
                    Total Payment Amount
                </span>
              </div>
            </div>

            <!--<div class="row  mt-1">
              <div class="col-sm-12">
                <div class="form-group" v-if="invoiceTotal == paymentAmount  ">
                    <input class="form-control" type="text" v-model="paymentStatus">
                </div>
              </div>
            </div>-->

            <div class="row  mt-1">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="date" v-model="pickupDate" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-warning">
                    Select only if you have to change Pickup Date
                </span>
              </div>
            </div> 

            <div class="row  mt-1">
              <div class="col-sm-12">
                <div class="form-group">
                   <div id="v-model-select">
                    <select class="form-control" v-model="pickupStatus">
                        <option disabled value="">Click To Select Pickup Status</option>
                        <option>Picked</option>
                        <option>Not Picked</option>
                    </select>
                </div>
                </div>
              </div>
            </div>

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="updateInvoice">SAVE</button>
            </div>   

        </div>
      </div>
    </div>
  </center>  
</template>

<script>
import axios from "axios";
 
export default {
  data() {
    return {
      customerSelection: [],
      custID: "",
      invoiceDate : "",
      paymentStatus: "",
      paymentAmount: "",
      invoiceTotal: "",
      pickupDate: "",
      pickupStatus: "",
      paidStatus: '',
    };
  },
  created: function () {
    this.getInvoiceById();
    this.payStatus();
    let apiURL1 = `http://localhost:3000/customers`; 
        axios.get(apiURL1).then((res) => { 
          this.customerSelection = res.data;
    });
  },
  methods: {
    async getInvoiceById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/invoices/${this.$route.params.id}`
        );
        this.custID = response.data.cust_id;
        this.invoiceDate = response.data.invoice_date;
        this.paidStatus = response.data.payment_status;
        this.paymentAmount = response.data.payment_amount;
        this.invoiceTotal = response.data.invoice_total;
        this.pickupDate = response.data.pick_up_date;
        this.pickupStatus = response.data.picked_up;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateInvoice() {
      try {
        await axios.put(
          `http://localhost:3000/invoices/${this.$route.params.id}`,
          {
            cust_id: this.custID,
            invoice_date: this.invoiceDate,
            payment_status: this.paidStatus,
            payment_amount: this.paymentAmount,
            invoice_total: this.invoiceTotal,
            pick_up_date: this.pickupDate,
            picked_up: this.pickupStatus,
          }
        );
        this.$router.push("/invoices");
      } catch (err) {
        console.log(err);
      }
    },
    payStatus: function(){
      if(this.paymentAmount > this.invoiceTotal){
        return this.paidStatus = "Overpaid"
      }
      else if(this.paymentAmount == 0){
        return this.paidStatus = "Not Paid"
      }
      else if(this.paymentAmount == this.invoiceTotal){
        return this.paidStatus = "Paid"
      }
      else if(this.paymentAmount < this.invoiceTotal){
        return this.paidStatus = "Partially Paid"
      }
    },
  },
};
</script>