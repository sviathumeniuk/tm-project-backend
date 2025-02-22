const Student = require('../models/student');

exports.getAllStudents = () => Student.find();

exports.getStudentById = (id) => Student.findById(id);

exports.createStudent = (studentData) => new Student(studentData).save();

exports.updateStudent = (id, studentData) => Student.findByIdAndUpdate(id, studentData, { new: true });

exports.deleteStudent = (id) => Student.findByIdAndDelete(id);