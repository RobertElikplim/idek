import { createRouter, createWebHistory } from 'vue-router'
import Customers from '../components/viewRecords/Customers.vue'
import Dashboard from '../components/Dashboard.vue'
import Items from '../components/viewRecords/Items.vue'
import Invoiceline from '../components/viewRecords/Invoiceline.vue'
// import Invoices from '../components/viewRecords/Invoices.vue'
import Services from '../components/viewRecords/Services.vue'
import Vendors from '../components/viewRecords/Vendors.vue'
import Payment from '../components/viewRecords/VendorPayment.vue'
import CreateCust from '../components/addRecord/addCustomer.vue'
import CreateInvline from '../components/addRecord/addInvLine.vue'
import CreateInvoiceLine from '../components/addRecord/addInvoiceLine'
import CreateInvoice from '../components/addRecord/addInvoice.vue'
import CreateItems from '../components/addRecord/addItems.vue'
import CreateServe from '../components/addRecord/addServices.vue'
import CreateVend from '../components/addRecord/addVendors.vue'
import CreatePay from '../components/addRecord/addPayment.vue'
import EditCustomer from '../components/editRecord/editCustomer.vue'
import EditInvoice from '../components/editRecord/editInvoice.vue'
import EditInvoiceline from '../components/editRecord/editInvoiceline.vue'
import EditItem from '../components/editRecord/editItem.vue'
import EditPayment from '../components/editRecord/editPayment.vue'
import EditServices from '../components/editRecord/editServices.vue'
import EditVendors from '../components/editRecord/editVendors.vue'
import viewInvoice from '../components/views/ViewInvoice.vue'
import findInvoice from '../components/viewRecords/findInvoice.vue'

const routes = [
  {
    name: 'ViewInvoice',
    path: '/invoice/view/:id',
    component: viewInvoice
  },
  {
    name: 'Customers',
    path: '/customers',
    component: Customers
  },
  {
    name: 'Dashboard',
    path: '/',
    component: Dashboard
  },
  {
    name: 'Items',
    path: '/items',
    component: Items
  },
  {
    name: 'Invoiceline',
    path: '/invoiceline',
    component: Invoiceline
  },
  {
    name: 'Invoices',
    path: '/invoices',
    component: findInvoice
  },
  {
    name: 'Services',
    path: '/services',
    component: Services
  },
  {
    name: 'Vendors',
    path: '/vendors',
    component: Vendors
  },
  {
    name: 'Payment',
    path: '/payments',
    component: Payment
  },
  {
    name: 'CreateCust',
    path: '/createcust',
    component: CreateCust
  },
  {
    name: 'CreateInvline',
    path: '/createinvline',
    component: CreateInvline
  },
  {
     name: 'CreateInvoiceLine',
     path: '/invoice/:id/add',
     component: CreateInvoiceLine
  },
  {
    name: 'CreateInvoice',
    path: '/createinvoice',
    component: CreateInvoice
  },
  {
    name: 'CreateItems',
    path: '/createitem',
    component: CreateItems
  },
  {
    name: 'CreateServe',
    path: '/createservice',
    component: CreateServe
  },
  {
    name: 'CreateVend',
    path: '/createvendor',
    component: CreateVend
  },
  {
    name: 'CreatePay',
    path: '/creatpayment',
    component: CreatePay
  },
  {
    name: 'EditCustomer',
    path: '/customer/id',
    component: EditCustomer
  },
  {
    name: 'EditInvoice',
    path: '/invoice/:id',
    component: EditInvoice
  },
  {
    name: 'EditInvoiceline',
    path: '/invoiceline/id',
    component: EditInvoiceline
  },
  {
    name: 'EditItem',
    path: '/item/id',
    component: EditItem
  },
  {
    name: 'EditPayment',
    path: '/payment/id',
    component: EditPayment
  },
  {
    name: 'EditServices',
    path: '/service/id',
    component: EditServices
  },
  {
    name: 'EditVendors',
    path: '/vendors/id',
    component: EditVendors
  },
  // {
  //   name: 'findInvoice',
  //   path: '/invoice/search',
  //   component: findInvoice
  // },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  
export default router;