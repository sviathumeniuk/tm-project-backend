const express = require("express");
const teacherController = require('../controllers/teacher.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, teacherController.getAllTeachers);
router.get('/:id', authMiddleware, teacherController.getTeacherById);
router.post('/', authMiddleware, teacherController.createTeacher);
router.put('/:id', authMiddleware, teacherController.updateTeacher);
router.delete('/:id', authMiddleware, teacherController.deleteTeacher);

module.exports = router;