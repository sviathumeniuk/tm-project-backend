const PaymentService = require("../services/payment.service");
const asyncHandler = require("../middleware/asyncHandler.middleware");

exports.getAllPayments = asyncHandler(async (req, res) => {
  const payments = await PaymentService.getAllPayments();
  res.status(200).json(payments);
});

exports.getPaymentById = asyncHandler(async (req, res) => {
  const payment = await PaymentService.getPaymentById(req.params.id);
  if (!payment) {
    return res.status(404).json({
      message: "Payment not found",
    });
  }
  res.status(200).json(payment);
});

exports.createPayment = asyncHandler(async (req, res) => {
  const newPayment = await PaymentService.createPayment(req.body);
  res.status(201).json(newPayment);
});

exports.updatePayment = asyncHandler(async (req, res) => {
  const updatedPayment = await PaymentService.updatePayment(req.params.id, req.body);
  if (!updatedPayment) {
    return res.status(404).json({
      message: "Payment not found",
    });
  }
  res.status(200).json(updatedPayment);
});

exports.deletePayment = asyncHandler(async (req, res) => {
  const deletedPayment = await PaymentService.deletePayment(req.params.id);
  if (!deletedPayment) {
    return res.status(404).json({
      message: "Payment not found",
    });
  }
  res.status(200).json(deletedPayment);
});

exports.getPaymentsByTeacher = asyncHandler(async (req, res) => {
  const payments = await PaymentService.getPaymentByTeacher(req.params.teacherId);
  res.status(200).json(payments);
});

exports.getPaymentsByStatus = asyncHandler(async (req, res) => {
  const payments = await PaymentService.getPaymentByStatus(req.params.status);
  res.status(200).json(payments);
});