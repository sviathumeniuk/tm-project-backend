const express = require("express");
const paymentController = require('../controllers/payment.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, paymentController.getAllPayments);
router.get('/:id', authMiddleware, paymentController.getPaymentById);
router.post('/', authMiddleware, paymentController.createPayment);
router.put('/:id', authMiddleware, paymentController.updatePayment);
router.delete('/:id', authMiddleware, paymentController.deletePayment);
router.get('/teacher/:teacherId', authMiddleware, paymentController.getPaymentsByTeacher);
router.get('/status/:status', authMiddleware, paymentController.getPaymentsByStatus);

module.exports = router;