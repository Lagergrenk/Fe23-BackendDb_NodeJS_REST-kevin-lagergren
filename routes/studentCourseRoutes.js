const express = require('express');
const studentCourseController = require('../controllers/studentCourseController');
const router = express.Router();

router.get('/students-courses', (req, res) => studentCourseController.getAllCoursesWithStudents(req, res, true));
router.get('/students-courses/new', (req, res) => studentCourseController.showAddStudentToCourseForm(req, res));
router.get('/students-courses/:name', (req, res) => studentCourseController.getStudentCoursesByName(req, res, true));
router.get('/students-cooures/:id', (req, res) => studentCourseController.getStudentCoursesById(req, res, true));

router.post('/students-courses', (req, res) => studentCourseController.addStudentToCourse(req, res));
router.delete('/students-courses/:id', (req, res) => studentCourseController.deleteStudentFromCourse(req, res));
module.exports = router;
