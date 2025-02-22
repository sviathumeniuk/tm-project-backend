const Payment = require("../models/payment");
const createGenericService = require("./base.service");

const paymentService = createGenericService(Payment);

module.exports = paymentService;