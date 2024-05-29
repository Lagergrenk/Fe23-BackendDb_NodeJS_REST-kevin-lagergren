const express = require('express');
const courseController = require('../../controllers/courseController');
const router = express.Router();

router.get('/courses', (req, res) => courseController.getAllCourses(req, res));
router.get('/courses/id/:id', (req, res) => courseController.getCourseById(req, res));
router.get('/courses/name/:name', (req, res) => courseController.getCoursesByName(req, res));
router.get('/courses/search/name/', (req, res) => courseController.getCoursesByNameKeyWord(req, res));
router.get('/courses/search/description/', (req, res) => courseController.getCoursesByDescriptionKeyWord(req, res));
module.exports = router;
