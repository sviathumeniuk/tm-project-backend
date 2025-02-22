const express = require("express");
const studentController = require('../controllers/student.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, studentController.getAll);
router.get('/:id', authMiddleware, studentController.getById);
router.post('/', authMiddleware, studentController.create);
router.put('/:id', authMiddleware, studentController.update);
router.delete('/:id', authMiddleware, studentController.delete);

module.exports = router;