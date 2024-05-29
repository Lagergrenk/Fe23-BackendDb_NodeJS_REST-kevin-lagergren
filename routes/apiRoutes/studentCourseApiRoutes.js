const express = require('express');
const studentCourseController = require('../../controllers/studentCourseController');
const router = express.Router();

router.get('/students-courses', (req, res) => studentCourseController.getAllCoursesWithStudents(req, res));
router.get('/students/:name/courses', (req, res) => studentCourseController.getStudentCoursesByName(req, res));
router.get('/courses/id/:id/students', (req, res) => studentCourseController.getCourseWithStudentsById(req, res));
router.get('/courses/name/:name/students', (req, res) =>
  studentCourseController.getCourseWithStudentsByCourseName(req, res)
);
router.get('/students/id/:id/courses', (req, res) => studentCourseController.getStudentCoursesById(req, res));
router.get('/students/town/:town/courses', (req, res) => studentCourseController.getCourseWithStudentsByTown(req, res));

module.exports = router;
