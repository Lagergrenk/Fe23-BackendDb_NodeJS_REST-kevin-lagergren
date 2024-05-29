const studentCourseModel = require('../models/studentCourseModel');
const studentModel = require('../models/studentModel');
const courseModel = require('../models/courseModel');

const getAllCoursesWithStudents = (req, res, isGui = false) => {
  studentCourseModel.getAllCoursesWithStudents((err, results) => {
    if (err) {
      console.error('Error fetching students courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }

    if (isGui) res.render('students_courses', { studentsCourses: results });
    else {
      res.json(results);
    }
  });
};

const getStudentCoursesByName = (req, res, isGui = false) => {
  const name = req.params.name;
  studentCourseModel.getStudentCoursesByName(name, (err, results) => {
    if (err) {
      console.error('Error fetching student courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }

    if (isGui) res.render('students-courses', { studentsCourses: results });
    else {
      res.json(results);
    }
  });
};

const getCourseWithStudentsById = (req, res, isGui = false) => {
  const studentId = req.params.id;
  studentCourseModel.getCourseWithStudentsById(studentId, (err, results) => {
    if (err) {
      console.error('Error fetching student courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render('students-courses', { studentsCourses: results });
    else {
      res.json(results);
    }
  });
};

const getCourseWithStudentsByTown = (req, res, isGui = false) => {
  const town = req.params.town;
  studentCourseModel.getCourseWithStudentsByTown(town, (err, results) => {
    if (err) {
      console.error('Error fetching student courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render('students-courses', { studentsCourses: results });
    else {
      res.json(results);
    }
  });
};
const getCourseWithStudentsByCourseName = (req, res, isGui = false) => {
  const name = req.params.name;
  studentCourseModel.getCourseWithStudentsByCourseName(name, (err, results) => {
    if (err) {
      console.error('Error fetching student courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render('students-courses', { studentsCourses: results });
    else {
      res.json(results);
    }
  });
};

const getStudentCoursesById = (req, res, isGui = false) => {
  const studentId = req.params.id;
  studentCourseModel.getStudentCoursesById(studentId, (err, results) => {
    if (err) {
      console.error('Error fetching student courses:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    if (isGui) res.render('students-courses', { studentsCourses: results });
    else {
      res.json(results);
    }
  });
};

const showAddStudentToCourseForm = (req, res) => {
  studentModel.getAllStudents((err, students) => {
    if (err) {
      console.error('Error fetching students:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    courseModel.getAllCourses((err, courses) => {
      if (err) {
        console.error('Error fetching courses:', err);
        res.status(500).json({ error: 'Server Error' });
        return;
      }
      res.render('add_student_to_course', { students, courses });
    });
  });
};

const addStudentToCourse = (req, res) => {
  const { student, course } = req.body;
  studentCourseModel.addStudentToCourse(student, course, (err, results) => {
    if (err) {
      console.error('Error adding student to course:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }
    res.redirect('/students-courses');
  });
};

const deleteStudentFromCourse = (req, res) => {
  const { id } = req.params;
  console.log('Delete request received for ID:', id); // Loggning för att se vilket ID som tas emot

  studentCourseModel.deleteStudentFromCourse(id, (err, results) => {
    if (err) {
      console.error('Error deleting student from course:', err);
      res.status(500).json({ error: 'Server Error' });
      return;
    }

    console.log('Delete operation successful:', results); // Loggning för att bekräfta lyckad radering

    // Kontrollera resultatet och omdirigera
    if (results.affectedRows === 0) {
      console.error('No rows affected, invalid ID:', id);
      res.status(404).json({ error: 'Student-Course not found' });
      return;
    }

    console.log('Redirecting to /students-courses'); // Loggning för att bekräfta omdirigering
    res.redirect('/students-courses');
  });
};

module.exports = {
  getAllCoursesWithStudents,
  getStudentCoursesByName,
  getCourseWithStudentsById,
  getCourseWithStudentsByTown,
  getCourseWithStudentsByCourseName,
  getStudentCoursesById,
  showAddStudentToCourseForm,
  addStudentToCourse,
  deleteStudentFromCourse,
};
