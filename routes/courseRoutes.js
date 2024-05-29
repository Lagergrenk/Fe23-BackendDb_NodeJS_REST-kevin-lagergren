const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

router.get('/courses', courseController.getAllCourses);
router.get('/courses/new', (req, res) => res.render('courses/create_course'));
router.get('/courses/:id', courseController.getCourseById);
router.get('/courses/:id/edit', (req, res) => {
  const courseId = req.params.id;
  courseController.getCourseById(
    { params: { id: courseId } },
    {
      json: (course) => res.render('courses/edit_course', { course }),
    }
  );
});
router.get('/courses/name/:name', courseController.getCoursesByName);
router.get('/courses/search/name/', courseController.getCoursesByNameKeyWord);
router.get('/courses/search/description/', courseController.getCoursesByDescriptionKeyWord);
router.get('/courses/:id/students', courseController.getCoursesByStudentId);
router.post('/courses', courseController.createCourse);
router.put('/courses/:id', courseController.updateCourse);
router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
