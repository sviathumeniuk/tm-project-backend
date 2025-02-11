const Teacher = require('../models/teacher');

exports.getAllTeachers = () => Teacher.find();

exports.getTeacherById = (id) => Teacher.findById(id);

exports.createTeacher = (teacherData) => new Teacher(teacherData).save();

exports.updateTeacher = (id, teacherData) => Teacher.findByIdAndUpdate(id, teacherData, { new: true });

exports.deleteTeacher = (id) => Teacher.findByIdAndDelete(id);