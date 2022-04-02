// import express
import express from "express";
import { createCustomer, createInvoiceLine, createInvoices, createItems,
    createServices, createVendorPayment, createVendors, deleteCustomer, deleteInvoiceline, 
    deleteInvoices, deleteItem, deleteService, deleteVendorPay, deleteVendors, showCustomerById, showCustomers, 
    showinvlineById, showinvlineByInvoiceId,
    showInvoiceLine, showInvoices, showInvoicesById, showInvoiceById, showItems, showItemsById, showNotPickedUp, showOutStandingVendorPayment, showServices, showServicesById, showVendorPayments, showVendors, showVendorsById, showVpaymentsById, updateCustomer, 
    updateInvoiceline, updateInvoices, updateItem, updateServices, updateVendorPay, updateVendors, showInvoiceList, showInvoiceListByPhone , showInvoiceListByName, markAsPicked }
    from "../controllers/premier.js";

// init express router
const router = express.Router();

//import function from controller
import{} from "../controllers/premier.js";

// export default router
export default router;

// get all routes
router.get('/customers', showCustomers);
router.get('/invoicesline', showInvoiceLine);
router.get('/invoices', showInvoices);
router.get('/items', showItems);
router.get('/services', showServices);
router.get('/vendors', showVendors);
router.get('/vendorpay', showVendorPayments);
router.get('/outsvpay', showOutStandingVendorPayment);
router.get('/notpicked', showNotPickedUp);
router.get('/invoiceList', showInvoiceList);
router.get('/invoiceList/phone/:phone', showInvoiceListByPhone);
router.get('/invoiceList/name/:name', showInvoiceListByName);

//get single routes
router.get('/customers/:id', showCustomerById);
router.get('/invoicesline/:id', showinvlineById);
router.get('/invoice/invoiceline/:id', showinvlineByInvoiceId);
router.get('/invoicesline/:id', showinvlineById);
router.get('/invoices/:id', showInvoicesById);
router.get('/invoice/:id', showInvoiceById);
router.get('/items/:id', showItemsById);
router.get('/services/:id', showServicesById);
router.get('/vendors/:id', showVendorsById);
router.get('/vendorpay/:id', showVpaymentsById);

// post/create routes
router.post('/customers', createCustomer);
router.post('/invoicesline', createInvoiceLine);
router.post('/invoices', createInvoices);
router.post('/items', createItems);
router.post('/services', createServices);
router.post('/vendors', createVendors);
router.post('/vendorpay', createVendorPayment);

// delete routes
router.delete('/customers/:id', deleteCustomer);
router.delete('/invoicesline/:id', deleteInvoiceline);
router.delete('/invoices/:id', deleteInvoices);
router.delete('/items/:id', deleteItem);
router.delete('/services/:id', deleteService);
router.delete('/vendors/:id', deleteVendors);
router.delete('/vendorpay/:id', deleteVendorPay);

// update routes
router.put('/customers/:id', updateCustomer);
router.put('/invoicesline/:id', updateInvoiceline);
router.put('/invoices/:id', updateInvoices);
router.put('/items/:id', updateItem);
router.put('/services/:id', updateServices);
router.put('/vendors/:id', updateVendors);
router.put('/vendorpay/:id', updateVendorPay);
router.put('/pickedup/:id', markAsPicked);