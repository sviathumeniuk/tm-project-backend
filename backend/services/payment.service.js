const Payment = require("../models/payment");

exports.getAllPayments = () => Payment.find();

exports.getPaymentById = (id) => Payment.findById(id);

exports.createPayment = (paymentData) => new Payment(paymentData).save();

exports.updatePayment = (id, paymentData) => Payment.findByIdAndUpdate(id, paymentData, { new: true });

exports.deletePayment = (id) => Payment.findByIdAndDelete(id);