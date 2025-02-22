const express = require("express");
const reportController = require('../controllers/report.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, reportController.getAll);
router.get('/:id', authMiddleware, reportController.getById);
router.post('/', authMiddleware, reportController.create);
router.put('/:id', authMiddleware, reportController.update);
router.delete('/:id', authMiddleware, reportController.delete);

module.exports = router;