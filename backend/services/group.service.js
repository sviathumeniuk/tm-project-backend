const Group = require("../models/group");
const createGenericService = require("./base.service");

const groupService = createGenericService(Group);

module.exports = groupService;