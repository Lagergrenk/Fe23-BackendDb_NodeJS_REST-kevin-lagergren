const express = require('express');
const studentController = require('../../controllers/studentController');
const router = express.Router();

router.get('/students', (req, res) => studentController.getAllStudents(req, res));
router.get('/students/search', (req, res) => studentController.getStudentByKeyWord(req, res));
router.get('/students/id/:id', (req, res) => studentController.getStudentById(req, res));
router.get('/students/name/:name', (req, res) => studentController.getStudentByName(req, res));
router.get('/students/town/:town', (req, res) => studentController.getStudentByTown(req, res));

module.exports = router;
