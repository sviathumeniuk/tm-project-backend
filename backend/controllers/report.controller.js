const ReportService = require("../services/report.service");
const asyncHandler = require("../middleware/asyncHandler.middleware");

exports.getAllReports = asyncHandler(async (req, res) => {
  const reports = await ReportService.getAllReports();
  res.status(200).json(reports);
});

exports.getReportById = asyncHandler(async (req, res) => {
  const report = await ReportService.getReportById(req.params.id);
  if (!report) {
    return res.status(404).json({
      message: "Report not found",
    });
  }
  res.status(200).json(report);
});

exports.createReport = asyncHandler(async (req, res) => {
  const newReport = await ReportService.createReport(req.body);
  res.status(201).json(newReport);
});

exports.updateReport = asyncHandler(async (req, res) => {
  const updatedReport = await ReportService.updateReport(req.params.id, req.body);
  if (!updatedReport) {
    return res.status(404).json({
      message: "Report not found",
    });
  }
  res.status(200).json(updatedReport);
});

exports.deleteReport = asyncHandler(async (req, res) => {
  const deletedReport = await ReportService.deleteReport(req.params.id);
  if (!deletedReport) {
    return res.status(404).json({
      message: "Report not found",
    });
  }
  res.status(200).json(deletedReport);
});