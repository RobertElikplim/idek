<template>
  <center>
    <div class="container mt-5 mb-5 d-flex justify-content-center">
      <div class="card px-5 py-5 alert-primary clearfix">
        <div class="card-body">
        <h6 class="information mt-4">Fill in the form below to edit CUSTOMER</h6>

            <div class="row  mt-4">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="First Name" v-model="firstName" required/>
                </div>
              </div>
            </div>

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="text" placeholder="Last Name" v-model="lastName" required/>
                </div>
              </div>
            </div> 

            <div class="row  mt-3">
              <div class="col-sm-12">
                <div class="form-group">
                  <input class="form-control" type="Datepicker" placeholder="XXX-XXX-XXXX" pattern="^\d{3}-\d{3}-\d{4}$" aria-describedby="phoneHelpBlock" v-model="phoneNum" required/>
                </div>
                <span id="phoneHelpBlock" class="form-text text-danger text-muted">
                    10 digit phone number should be entered with dashes.
                </span>
              </div>
            </div> 

            <div class="control">
              <button class="btn btn-info mt-4" @click.prevent="updateCustomer">UPDATE</button>
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
      firstName: "",
      lastName: "",
      phoneNum: "",
    };
  },
  created: function () {
    this.getCustomerById();
  },
  methods: {
    async getCustomerById() {
      try {
        const response = await axios.get(
          `http://localhost:3000/customers/${this.$route.params.id}`
        );
        this.firstName = response.data.first_name;
        this.lastName = response.data.last_name;
        this.phoneNum = response.data.phone;
      } catch (err) {
        console.log(err);
      }
    },
 
    async updateCustomer() {
      try {
        await axios.put(
          `http://localhost:3000/customers/${this.$route.params.id}`,
          {
            first_name: this.firstName,
            last_name: this.lastName,
            phone: this.phoneNum,
          }
        );
        this.$router.push("/customers");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>