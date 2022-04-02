import { deleteCustomerById, deleteInvoicelineById, deleteInvoicesById, deleteItemById, deleteServicesById, deleteVendorPayById, deleteVendorsById, getCustomerById, getCustomers, getinvlineById, getInvoiceLine, 
    getInvoices, getInvoicesById, getInvoiceById, getinvlineByInvoiceId, getItems, getItemsById, getNotPickedUp, getOutStandingVendorPayment, getServices, getServicesById, getVendorPayment, getVendors, getVendorsById, getVpaymentsById, insertCustomer, insertInvoiceLine, 
    insertInvoices, insertItems, insertServices, insertVendorPay, insertVendors, updateCustomersById, 
    updateInvoicelineById, updateInvoicesById, updateServicesById, updateTtemById, 
    updateVendorPayById, getInvoiceList, getInvoiceListByPhone, getInvoiceListByName,
    updateVendorsById, 
    markAsPickedById} from "../models/premierModel.js";

// GET DATA FROM TABLES

export const showCustomers = (req, res) => {
    getCustomers((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceLine = (req, res) => {
    getInvoiceLine((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoices = (req, res) => {
    getInvoices((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showItems = (req, res) => {
    getItems((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showServices = (req, res) => {
    getServices((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVendors = (req, res) => {
    getVendors((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVendorPayments = (req, res) => {
    getVendorPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// GET SINGLE RECORDS BY ID
export const showCustomerById = (req, res) => {
    getCustomerById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoicesById = (req, res) => {
    getInvoicesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showInvoiceById = (req, res) => {
    getInvoiceById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showinvlineById = (req, res) => {
    getinvlineById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showinvlineByInvoiceId = (req, res) => {
    getinvlineByInvoiceId(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showItemsById = (req, res) => {
    getItemsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showServicesById = (req, res) => {
    getServicesById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVpaymentsById = (req, res) => {
    getVpaymentsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showVendorsById = (req, res) => {
    getVendorsById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// ADD DATA TO TABLES
export const createCustomer = (req, res) => {
    const data = req.body;
    insertCustomer(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createInvoiceLine = (req, res) => {
    const data = req.body;
    insertInvoiceLine(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createInvoices = (req, res) => {
    const data = req.body;
    insertInvoices(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createItems = (req, res) => {
    const data = req.body;
    insertItems(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createServices = (req, res) => {
    const data = req.body;
    insertServices(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createVendors = (req, res) => {
    const data = req.body;
    insertVendors(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const createVendorPayment = (req, res) => {
    const data = req.body;
    insertVendorPay(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// DELETE DATA

export const deleteCustomer = (req, res) => {
    const id = req.params.id;
    deleteCustomerById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteInvoiceline = (req, res) => {
    const id = req.params.id;
    deleteInvoicelineById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteInvoices = (req, res) => {
    const id = req.params.id;
    deleteInvoicesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteItem = (req, res) => {
    const id = req.params.id;
    deleteItemById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteService = (req, res) => {
    const id = req.params.id;
    deleteServicesById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteVendors = (req, res) => {
    const id = req.params.id;
    deleteVendorsById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const deleteVendorPay = (req, res) => {
    const id = req.params.id;
    deleteVendorPayById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}


// UPDATE TABLES
export const updateCustomer = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateCustomersById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateInvoiceline = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInvoicelineById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateInvoices = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateInvoicesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateItem = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTtemById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateServices = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateServicesById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateVendors = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateVendorsById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const updateVendorPay = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateVendorPayById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const markAsPicked = (req, res) => {
    const id    = req.params.id;
    markAsPickedById(id, (err, results) => {
        if (err){
            res.send(err);
            console.log(err);
        }else{
            res.json(results);
        }
    });
}


/// REPORTS
export const showOutStandingVendorPayment = (req, res) => {
    getOutStandingVendorPayment((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showNotPickedUp = (req, res) => {
    getNotPickedUp((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceList = (req, res) => {
    getInvoiceList((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceListByPhone = (req, res) => {
    getInvoiceListByPhone(req.params.phone, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
export const showInvoiceListByName = (req, res) => {
    getInvoiceListByName(req.params.name, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}