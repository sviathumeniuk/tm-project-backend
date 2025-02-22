const express = require("express");
const paymentController = require('../controllers/payment.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, paymentController.getAll);
router.get('/:id', authMiddleware, paymentController.getById);
router.post('/', authMiddleware, paymentController.create);
router.put('/:id', authMiddleware, paymentController.update);
router.delete('/:id', authMiddleware, paymentController.delete);

module.exports = router;