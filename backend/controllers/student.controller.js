const StudentService = require('../services/student.service');
const asyncHandler = require("../middleware/asyncHandler.middleware");

exports.getAllStudents = asyncHandler(async (req, res) => {
  const students = await StudentService.getAllStudents();
  res.status(200).json(students);
});

exports.getStudentById = asyncHandler(async (req, res) => {
  const student = await StudentService.getStudentById(req.params.id);
  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  res.status(200).json(student);
});

exports.createStudent = asyncHandler(async (req, res) => {
  const newStudent = await StudentService.createStudent(req.body);
  res.status(201).json(newStudent);
});

exports.updateStudent = asyncHandler(async (req, res) => {
  const updatedStudent = await StudentService.updateStudent(req.params.id, req.body);
  if (!updatedStudent) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  res.status(200).json(updatedStudent);
});

exports.deleteStudent = asyncHandler(async (req, res) => {
  const deletedStudent = await StudentService.deleteStudent(req.params.id);
  if (!deletedStudent) {
    return res.status(404).json({
      message: "Student not found",
    });
  }
  res.status(200).json(deletedStudent);
});