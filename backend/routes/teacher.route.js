const express = require("express");
const teacherController = require('../controllers/teacher.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, teacherController.getAll);
router.get('/:id', authMiddleware, teacherController.getById);
router.post('/', authMiddleware, teacherController.create);
router.put('/:id', authMiddleware, teacherController.update);
router.delete('/:id', authMiddleware, teacherController.delete);

module.exports = router;