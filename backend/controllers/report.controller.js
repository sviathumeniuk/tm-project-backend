const reportService = require('../services/report.service');
const createCrudController = require('./base.controller');

module.exports = createCrudController(reportService, 'Report');