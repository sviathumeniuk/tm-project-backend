const Report = require('../models/report');

exports.getAllReports = () => Report.find();

exports.getReportById = (id) => Report.findById(id); 

exports.createReport = (reportData) => new Report(reportData).save();

exports.updateReport = (id, reportData) => Report.findByIdAndUpdate(id, reportData, { new: true });

exports.deleteReport = (id) => Report.findByIdAndDelete(id);

exports.getReportbyGroup = (groupId) => Report.find({ group: groupId });

exports.getReportByTeacher = (teacherId) => Report.find({ teacher: teacherId });