const express = require("express");
const reportController = require('../controllers/report.controller');
const { authMiddleware } = require("../middleware/auth.middleware");
const router = express.Router();

router.get('/', authMiddleware, reportController.getAllReports);
router.get('/:id', authMiddleware, reportController.getReportById);
router.post('/', authMiddleware, reportController.createReport);
router.put('/:id', authMiddleware, reportController.updateReport);
router.delete('/:id', authMiddleware, reportController.deleteReport);
router.get('/group/:groupId', authMiddleware, reportController.getReportsByGroup);
router.get('/teacher/:teacherId', authMiddleware, reportController.getReportsByTeacher);

module.exports = router;