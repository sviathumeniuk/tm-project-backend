const Student = require('../models/student');
const createGenericService = require('./base.service');

const studentService = createGenericService(Student);

module.exports = studentService;