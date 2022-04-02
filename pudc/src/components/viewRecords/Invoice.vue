<template>
  <center>
    <div class="container mt-3 mb-3 d-flex justify-content-center">
      <div class="card px-3 py-3 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-0">Invoice {{ invoice_id }} </h6>

             <div class="row mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                    <label>Customer Name</label>
                    <ul class="list-group">
                      <li class="list-group-item bg-light">{{ customer_name }}</li>
                    </ul>
                </div> 
              </div>
             </div>  

             <div class="row mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                    <label>Customer Phone</label>
                    <ul class="list-group">
                      <li class="list-group-item bg-light">{{ phone }}</li>
                    </ul>
                </div> 
              </div>
             </div>          

             <div class="row mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                    <label>Invoice Total</label>
                    <ul class="list-group">
                      <li class="list-group-item bg-light">{{ invoice_total }}</li>
                    </ul>
                </div> 
              </div>
             </div>

             <div class="row mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                    <label>Pick Up Date</label>
                    <ul class="list-group">
                      <li class="list-group-item bg-light">{{ dateTime(pick_up_date) }}</li>
                    </ul>
                </div> 
              </div>
             </div>

             <div class="row mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                    <label>Pick Up Status</label>
                    <ul class="list-group">
                      <li class="list-group-item bg-light">{{ picked_up }}</li>
                    </ul>
                </div> 
              </div>
             </div>

            <!-- <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="updateInvoice">SAVE</button>
            </div>    -->

        </div>
      </div>
    </div>
  </center>  
</template>

<script>
import axios from "axios";
import moment from "moment";
 
export default {
  name: "Invoice",
  data() {
    return {
      customer_name: "",
      phone: "",
      invoice_id: "",
      invoice_date : "",
      payment_status: "",
      invoice_total: "",
      pick_up_date: "",
      picked_up: "",
      paidStatus: '',
    };
  },
  created: function () {
    this.getInvoiceById();
  },
  
  methods: {

    dateTime(value) {
      return moment(value).format('MM-DD-YYYY');
    },

    async getInvoiceById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/invoice/${this.$route.params.id}`
        );
        this.customer_name = response.data.customer_name;
        this.phone = response.data.phone;
        this.invoice_id = response.data.invoice_id;
        this.invoice_date = response.data.invoice_date;
        this.payment_status = response.data.payment_status;
        this.invoice_total = response.data.invoice_total;
        this.pick_up_date = response.data.pick_up_date;
        this.picked_up = response.data.picked_up;
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