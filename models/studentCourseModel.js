const connection = require('../db');

const getAllCoursesWithStudents = (callback) => {
  const query = `
    SELECT students_courses.id, students.fName, students.lName, courses.name, courses.description 
    FROM students 
    JOIN students_courses 
    ON students.id = students_courses.students_id 
    JOIN courses 
    ON students_courses.courses_id = courses.id;`;
  connection.query(query, callback);
};

const getStudentCoursesByName = (name, callback) => {
  const query = `
    SELECT students.fName, students.lName, courses.name, courses.description
    FROM students
    JOIN students_courses ON students.id = students_courses.students_id
    JOIN courses ON students_courses.courses_id = courses.id
    WHERE students.fName = ? OR students.lName = ?;`;
  connection.query(query, [name, name], callback);
};

const getCourseWithStudentsById = (id, callback) => {
  const query = `
    SELECT courses.name AS courseName, 
    courses.description AS courseDescription, 
    students.fName, students.lName, students.town 
    FROM courses JOIN students_courses 
    ON courses.id = students_courses.courses_id 
    JOIN students 
    ON students_courses.students_id = students.id 
    WHERE courses.id = ?`;
  connection.query(query, [id], callback);
};

const getCourseWithStudentsByTown = (town, callback) => {
  const query = `
    SELECT courses.name AS courseName, 
    courses.description AS courseDescription, 
    students.fName, students.lName, students.town 
    FROM courses JOIN students_courses 
    ON courses.id = students_courses.courses_id 
    JOIN students 
    ON students_courses.students_id = students.id 
    WHERE students.town = ?`;
  connection.query(query, [town], callback);
};
const getCourseWithStudentsByCourseName = (name, callback) => {
  const query = `
    SELECT courses.name AS courseName,
    courses.description AS courseDescription,
    students.fName, students.lName, students.town
    FROM courses JOIN students_courses
    ON courses.id = students_courses.courses_id
    JOIN students
    ON students_courses.students_id = students.id
    WHERE courses.name = ?`;
  connection.query(query, [name], callback);
};

const getStudentCoursesById = (id, callback) => {
  const query = `
    SELECT students.fName, students.lName, courses.name, courses.description
    FROM students
    JOIN students_courses ON students.id = students_courses.students_id
    JOIN courses ON students_courses.courses_id = courses.id
    WHERE students.id = ?;`;
  connection.query(query, [id], callback);
};

const addStudentToCourse = (studentId, courseId, callback) => {
  const query = 'INSERT INTO students_courses (students_id, courses_id) VALUES (?, ?)';
  connection.query(query, [studentId, courseId], callback);
};

const deleteStudentFromCourse = (studentCourseId, callback) => {
  const query = 'DELETE FROM students_courses WHERE students_courses.id = ? ';
  connection.query(query, [studentCourseId], callback);
};

module.exports = {
  getAllCoursesWithStudents,
  getStudentCoursesByName,
  getCourseWithStudentsById,
  getCourseWithStudentsByTown,
  getCourseWithStudentsByCourseName,
  getStudentCoursesById,
  addStudentToCourse,
  deleteStudentFromCourse,
};
