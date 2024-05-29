const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/apidocs', (req, res) => {
  res.render('apidocs');
});

module.exports = router;
