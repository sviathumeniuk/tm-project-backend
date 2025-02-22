const Report = require('../models/report');
const createGenericService = require('./base.service');

const reportService = createGenericService(Report);

module.exports = reportService;