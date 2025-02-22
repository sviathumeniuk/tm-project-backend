const teacherService = require('../services/teacher.service');
const createCrudController = require('./base.controller');

module.exports = createCrudController(teacherService, 'Teacher');