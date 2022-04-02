<template>
  <div>
    <nav  class="navbar navbar-expand navbar-dark bg-dark navbar sticky-top">
      <div class="container-fluid">
        <ul class="nav navbar-nav mr-auto" >
          <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">OTHER TABLES</a>
              <ul class="dropdown-menu navbar-dark bg-dark" aria-labelledby="navbarDropdownMenuLink">
                <li class="nav-item">
                  <router-link class="nav-link" to="/items">Items</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/services">Services</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/vendors">Vendors</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/payments">Vendor Payment</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/invoiceline">Invoice Lines</router-link>
                </li>
              </ul>
            </li>
        </ul>
        <a class="navbar-brand" href="/"><img alt="Vue logo" src="./assets/bronnas.png"></a>
            <ul class="nav navbar-nav mr-auto" >
                <li class="nav-item">
                  <router-link class="nav-link" to="/customers">Customers</router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/invoices">Invoices</router-link>
                </li>
            </ul>
      </div>
    </nav>
    <!-- <div class="text-light bg-dark">
      <center>{{currentDate()}}</center>
    </div> -->

    <!-- Router view -->
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default{
    methods:{
     currentDate(){
      var now = new Date();
      var day = ("0" + now.getDate()).slice(-2);
      var month = ("0" + (now.getMonth() + 1)).slice(-2);
      var today = now.getFullYear() + "-" + (month) + "-" + (day);
      return today;
   }
  } 
  }
</script>