const connection = require('../db');

const getAllStudents = (callback) => {
  connection.query('SELECT * FROM students', callback);
};

const getStudentById = (id, callback) => {
  connection.query('SELECT * FROM students WHERE id = ?', [id], callback);
};

const getStudentByName = (name, callback) => {
  connection.query('SELECT * FROM students WHERE fName = ? OR lName = ?', [name, name], callback);
};

const getStudentByTown = (town, callback) => {
  connection.query('SELECT * FROM students WHERE town = ?', [town], callback);
};

const getStudentCoursesById = (id, callback) => {
  const query = `
      SELECT courses.name, courses.description
      FROM courses
      JOIN students_courses ON courses.id = students_courses.courses_id
      WHERE students_courses.students_id = ?`;
  connection.query(query, [id], callback);
};

const getStudentByKeyWord = (keyWord, callback) => {
  const query = `
    SELECT *
    FROM students
    WHERE fName LIKE ?
    OR lName LIKE ?`;
  connection.query(query, [`%${keyWord}%`, `%${keyWord}%`], callback);
};

const createStudent = (student, callback) => {
  const query = 'INSERT INTO students (fName, lName, town) VALUES (?, ?, ?)';
  connection.query(query, [student.fName, student.lName, student.town], callback);
};

const updateStudent = (id, student, callback) => {
  const query = 'UPDATE students SET fName = ?, lName = ?, town = ? WHERE id = ?';
  connection.query(query, [student.fName, student.lName, student.town, id], callback);
};

const deleteStudent = (id, callback) => {
  connection.query('DELETE FROM students WHERE id = ?', [id], callback);
};

const deleteStudentCourses = (id, callback) => {
  connection.query('DELETE FROM students_courses WHERE students_id = ?', [id], callback);
};

module.exports = {
  getAllStudents,
  getStudentById,
  getStudentByName,
  getStudentCoursesById,
  getStudentByKeyWord,
  getStudentByTown,
  createStudent,
  updateStudent,
  deleteStudent,
  deleteStudentCourses,
};
