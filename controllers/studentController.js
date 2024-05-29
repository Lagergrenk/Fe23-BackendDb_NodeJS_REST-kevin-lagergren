const studentModel = require('../models/studentModel');
const studentPath = 'students/students';

const getAllStudents = (req, res, isGui = false) => {
  studentModel.getAllStudents((err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render(studentPath, { students: results });
    else {
      res.json(results);
    }
  });
};

const getStudentById = (req, res, isGui = false, profile = false) => {
  const studentId = req.params.id;
  studentModel.getStudentById(studentId, (err, results) => {
    if (err) {
      console.error('Error fetching student:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui && profile) res.render('students/student_profile', { student: results[0] });
    if (isGui && !profile) res.render('edit_student', { student: results[0] });
    else {
      res.json(results[0]);
    }
  });
};

const getStudentByName = (req, res, isGui = false) => {
  const name = req.params.name;
  studentModel.getStudentByName(name, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render(studentPath, { students: results });
    else {
      res.json(results);
    }
  });
};

const getStudentByTown = (req, res, isGui = false) => {
  const town = req.params.town;
  studentModel.getStudentByTown(town, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render(studentPath, { students: results });
    else {
      res.json(results);
    }
  });
};

const getStudentByKeyWord = (req, res, isGui = false) => {
  const keyWord = req.query.keyWord;
  studentModel.getStudentByKeyWord(keyWord, (err, results) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render(studentPath, { students: results });
    else {
      res.json(results);
    }
  });
};

const getStudentCoursesById = (req, res, isGui = false) => {
  const studentId = req.params.id;
  studentModel.getStudentCoursesById(studentId, (err, results) => {
    if (err) {
      console.error('Error fetching student courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render('courses', { courses: results });
    else {
      res.json(results);
    }
  });
};

const createStudent = (req, res) => {
  const student = req.body;
  studentModel.createStudent(student, (err, results) => {
    if (err) {
      console.error('Error creating student:', err);
      res.status(500).send('Server Error');
      return;
    }
    res.redirect('/students');
  });
};

const updateStudent = (req, res) => {
  const studentId = req.params.id;
  const student = req.body;
  studentModel.updateStudent(studentId, student, (err, results) => {
    if (err) {
      console.error('Error updating student:', err);
      res.status(500).send('Server Error');
      return;
    }
    res.redirect('/students');
  });
};

const deleteStudent = (req, res) => {
  const studentId = req.params.id;
  studentModel.deleteStudentCourses(studentId, (err, results) => {
    if (err) {
      console.error('Error deleting student courses:', err);
      res.status(500).send('Server Error');
      return;
    }
  });
  studentModel.deleteStudent(studentId, (err, results) => {
    if (err) {
      console.error('Error deleting student:', err);
      res.status(500).send('Server Error');
      return;
    }

    res.redirect('/students');
  });
};
const getStudentWithCoursesById = (req, res, isGui = false) => {
  const studentId = req.params.id;
  studentModel.getStudentById(studentId, (err, studentResults) => {
    if (err) {
      console.error('Error fetching student:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (studentResults.length === 0) {
      res.status(404).json({ error: 'Student Not Found' });
      return;
    }

    studentModel.getStudentCoursesById(studentId, (err, courseResults) => {
      if (err) {
        console.error('Error fetching student courses:', err);
        res.status(500).json({ error: 'Server Error' });
        return;
      }

      const student = studentResults[0];
      student.courses = courseResults;

      if (isGui) {
        res.render('students/student_profile', { student });
      } else {
        res.json(student);
      }
    });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentByName,
  getStudentCoursesById,
  getStudentByKeyWord,
  getStudentWithCoursesById,
  getStudentByTown,
  createStudent,
  updateStudent,
  deleteStudent,
};
