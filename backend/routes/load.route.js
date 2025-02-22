const express = require("express");
const loadController = require('../controllers/load.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, loadController.getAllLoads);
router.get('/:id', authMiddleware, loadController.getLoadById);
router.post('/', authMiddleware, loadController.createLoad);
router.put('/:id', authMiddleware, loadController.updateLoad);
router.delete('/:id', authMiddleware, loadController.deleteLoad);

module.exports = router;