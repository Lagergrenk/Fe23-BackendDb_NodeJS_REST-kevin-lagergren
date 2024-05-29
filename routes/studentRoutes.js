const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();
router.get('/students/new', (req, res) => res.render('students/create_student'));
router.get('/students', (req, res) => studentController.getAllStudents(req, res, true));
router.get('/students/name/:name', (req, res) => studentController.getStudentByName(req, res, true));
router.get('/students/search', (req, res) => studentController.getStudentByKeyWord(req, res, true));
router.get('/students/:id', (req, res) => studentController.getStudentWithCoursesById(req, res, true));

router.get('/students/:id/edit', (req, res) => {
  const studentId = req.params.id;
  studentController.getStudentById(
    { params: { id: studentId } },
    {
      json: (student) => res.render('students/edit_student', { student }),
    }
  );
});
router.post('/students', studentController.createStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);

module.exports = router;
