const TeacherService = require("../services/teacher.service");
const asyncHandler = require("../middleware/asyncHandler.middleware");

exports.getAllTeachers = asyncHandler(async (req, res) => {
  const teachers = await TeacherService.getAllTeachers();
  res.status(200).json(teachers);
});

exports.getTeacherById = asyncHandler(async (req, res) => {
  const teacher = await TeacherService.getTeacherById(req.params.id);
  if (!teacher) {
    return res.status(404).json({
      message: "Teacher not found",
    });
  }
  res.status(200).json(teacher);
});

exports.createTeacher = asyncHandler(async (req, res) => {
  const newTeacher = await TeacherService.createTeacher(req.body);
  res.status(201).json(newTeacher);
});

exports.updateTeacher = asyncHandler(async (req, res) => {
  const updatedTeacher = await TeacherService.updateTeacher(req.params.id, req.body);
  if (!updatedTeacher) {
    return res.status(404).json({
      message: "Teacher not found",
    });
  }
  res.status(200).json(updatedTeacher);
});

exports.deleteTeacher = asyncHandler(async (req, res) => {
  const deletedTeacher = await TeacherService.deleteTeacher(req.params.id);
  if (!deletedTeacher) {
    return res.status(404).json({
      message: "Teacher not found",
    });
  }
  res.status(200).json(deletedTeacher);
});