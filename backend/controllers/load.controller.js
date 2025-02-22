const LoadService = require("../services/load.service");
const createCrudController = require("./base.controller");

module.exports = createCrudController(LoadService, 'Load');