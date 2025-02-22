const express = require("express");
const groupController = require('../controllers/group.controller');
const { authMiddleware } = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, groupController.getAll);
router.get('/:id', authMiddleware, groupController.getById);
router.post('/', authMiddleware, groupController.create);
router.put('/:id', authMiddleware, groupController.update);
router.delete('/:id', authMiddleware, groupController.delete);

module.exports = router;