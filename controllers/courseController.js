const courseModel = require('../models/courseModel');
const coursePath = 'courses';

const getAllCourses = (req, res, isGui = false) => {
  courseModel.getAllCourses((err, results) => {
    if (err) {
      console.log('Error fetching courses', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    if (isGui) res.render(`${coursePath}/courses`, { courses: results });
    else {
      res.json(results);
    }
  });
};

const getCourseById = (req, res, isGui = false) => {
  const { id } = req.params;
  courseModel.getCourseById(id, (err, results) => {
    if (err) {
      console.log('Error fetching course by id', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    if (isGui) res.render(`${coursePath}/courses`, { course: results[0] });
    else {
      res.json(results[0]);
    }
  });
};

const getCoursesByName = (req, res, isGui = false) => {
  const { name } = req.params;
  courseModel.getCoursesByName(name, (err, results) => {
    if (err) {
      console.log('Error fetching course by name', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    if (isGui) res.render(`${coursePath}/courses`, { courses: results });
    else {
      res.json(results);
    }
  });
};

const getCoursesByNameKeyWord = (req, res, isGui = false) => {
  const { keyword } = req.query;
  courseModel.getCoursesByNameKeyWord(keyword, (err, results) => {
    if (err) {
      console.log('Error fetching course by keyword', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    if (isGui) res.render(`${coursePath}/courses`, { courses: results });
    else {
      res.json(results);
    }
  });
};

const getCoursesByDescriptionKeyWord = (req, res, isGui = false) => {
  const { keyword } = req.query;
  courseModel.getCoursesByDescriptionKeyWord(keyword, (err, results) => {
    if (err) {
      console.log('Error fetching course by keyword', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    if (isGui) res.render(`${coursePath}/courses`, { courses: results });
    else {
      res.json(results);
    }
  });
};

const getCoursesByStudentId = (req, res, isGui = false) => {
  const { id } = req.params;
  courseModel.getCoursesByStudentId(id, (err, results) => {
    if (err) {
      console.log('Error fetching course by student id', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    if (isGui) res.render(`${coursePath}/courses`, { courses: results });
    else {
      res.json(results);
    }
  });
};

const createCourse = (req, res) => {
  const { name, description } = req.body;
  courseModel.createCourse({ name, description }, (err, results) => {
    if (err) {
      console.log('Error creating course', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    res.redirect(`/courses`);
  });
};

const updateCourse = (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  console.log('updateCourse', id, name, description);
  courseModel.updateCourse(id, { name, description }, (err, results) => {
    if (err) {
      console.log('Error updating course', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    res.redirect(`/courses`);
  });
};

const deleteCourse = (req, res) => {
  const { id } = req.params;
  courseModel.deleteCourse(id, (err, results) => {
    if (err) {
      console.log('Error deleting course', err);
      res.status(500).json({ error: 'Server error' });
      return;
    }
    res.redirect(`/courses`);
  });
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
