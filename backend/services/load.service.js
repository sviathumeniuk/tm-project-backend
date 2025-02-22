const Load = require('../models/load');
const createGenericService = require('./base.service');

const loadService = createGenericService(Load);

module.exports = loadService;