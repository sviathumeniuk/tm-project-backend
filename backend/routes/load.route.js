const express = require("express");
const loadController = require('../controllers/load.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, loadController.getAll);
router.get('/:id', authMiddleware, loadController.getById);
router.post('/', authMiddleware, loadController.create);
router.put('/:id', authMiddleware, loadController.update);
router.delete('/:id', authMiddleware, loadController.delete);

module.exports = router;