const paymentService = require("../services/payment.service");
const createCrudController = require("./base.controller");

module.exports = createCrudController(paymentService, 'Payment');