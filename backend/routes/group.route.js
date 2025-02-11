const express = require("express");
const groupController = require('../controllers/group.controller');
const { authMiddleware } = require('../middleware/auth.middleware');
const router = express.Router();

router.get('/', authMiddleware, groupController.getAllGroups);
router.get('/:id', authMiddleware, groupController.getGroupById);
router.post('/', authMiddleware, groupController.createGroup);
router.put('/:id', authMiddleware, groupController.updateGroup);
router.delete('/:id', authMiddleware, groupController.deleteGroup);

module.exports = router;