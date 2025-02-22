const studentService = require('../services/student.service');
const createCrudController = require('./base.controller');

module.exports = createCrudController(studentService, 'Student');