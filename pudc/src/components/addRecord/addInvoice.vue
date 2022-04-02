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
                        <option disabled value="">Click To Select Customer</option>
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
              </div>
            </div>

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="number" placeholder="Enter Payment Amount"  v-model="paymentAmount" required/>
                </div>
              </div>
            </div>

            <!--<div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group" v-if="invoiceTotal == paymentAmount  ">
                    <input class="form-control" type="text" v-model="paymentStatus">
                </div>
              </div>
            </div>-->

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="date" v-model="pickupDate" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-danger text-muted">
                    Date to pick up order.
                </span>
              </div>
            </div> 

            <!--<div class="row  mt-1">
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
            </div>-->

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="saveInvoice">SAVE</button>
            </div>   

        </div>
      </div>
    </div>
  </center>  
</template>
 
<script>
// import axios
import axios from "axios";
 
export default {
  data() {
    return {
      customerSelection: [],
      custID: "",
      invoiceDate : new Date().toISOString().slice(0,10),
      paymentStatus: "",
      paymentAmount: "",
      invoiceTotal: "",
      pickupDate: "",
      pickupStatus: "",
      paidStatus: '',
      picked: '',
    };
  },
  created: function(){
    this.payStatus();
    this.pickedOrNot();
    let apiURL1 = `http://localhost:3000/customers`; 
        axios.get(apiURL1).then((res) => { 
          this.customerSelection = res.data;
    });
  },
  methods: {
    async saveInvoice() {
      try {
        await axios.post("http://localhost:3000/invoices", {
          cust_id: this.custID,
          invoice_date: this.invoiceDate,
          payment_status: this.paidStatus,
          payment_amount: this.paymentAmount,
          invoice_total: this.invoiceTotal,
          pick_up_date: this.pickupDate,
          picked_up: this.picked,
        });
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
    pickedOrNot: function(){
      if(this.paidStatus === "Paid"){
        return this.picked = "Not Picked"
      }
      else{
        return this.picked = "Not Picked"
      }
    },
  },
};
</script>

<style>
    .btn {
        margin-right: 10px;
    }
</style>