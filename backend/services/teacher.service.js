const Teacher = require('../models/teacher');
const createGenericService = require('./base.service');

const teacherService = createGenericService(Teacher);

module.exports = teacherService;