const GroupService = require("../services/group.service");
const createCrudController = require("./base.controller");

module.exports = createCrudController(GroupService, 'Group');