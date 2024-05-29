const connection = require('../db');

const getAllCourses = (callback) => {
  connection.query('SELECT * FROM courses', callback);
};

const getCourseById = (id, callback) => {
  connection.query('SELECT * FROM courses WHERE id = ?', [id], callback);
};

const getCoursesByName = (name, callback) => {
  connection.query('SELECT * FROM courses WHERE name = ?', [name], callback);
};

const getCoursesByNameKeyWord = (keyword, callback) => {
  connection.query(
    'SELECT * FROM courses WHERE name LIKE ? OR name LIKE ? OR name LIKE ? OR name LIKE ?',
    [`${keyword}`, `${keyword} %`, `% ${keyword}`, `% ${keyword} %`],
    callback
  );
};

const getCoursesByDescriptionKeyWord = (keyword, callback) => {
  connection.query(
    'SELECT * FROM courses WHERE description LIKE ? OR description LIKE ? OR description LIKE ? OR description LIKE ?',
    [`${keyword}`, `${keyword} %`, `% ${keyword}`, `% ${keyword} %`],
    callback
  );
};

const getCoursesByStudentId = (id, callback) => {
  const query = `
        SELECT courses.name, courses.description
        FROM courses
        JOIN students_courses ON courses.id = students_courses.courses_id
        WHERE students_courses.students_id = ?`;
  connection.query(query, [id], callback);
};

const createCourse = (course, callback) => {
  const query = 'INSERT INTO courses (name, description) VALUES (?, ?)';
  connection.query(query, [course.name, course.description], callback);
};

const updateCourse = (id, course, callback) => {
  const query = 'UPDATE courses SET name = ?, description = ? WHERE id = ?';
  connection.query(query, [course.name, course.description, id], callback);
};

const deleteCourse = (id, callback) => {
  connection.query('DELETE FROM courses WHERE id = ?', [id], callback);
};

module.exports = {
  getAllCourses,
  getCourseById,
  getCoursesByName,
  getCoursesByNameKeyWord,
  getCoursesByDescriptionKeyWord,
  getCoursesByStudentId,
  createCourse,
  updateCourse,
  deleteCourse,
};
