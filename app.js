const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');
const studentAPIRoutes = require('./routes/apiRoutes/studentApiRoutes');
const courseAPIRoutes = require('./routes/apiRoutes/courseApiRoutes');
const indexRoutes = require('./routes/indexRoutes');
const studentCourseAPIRoutes = require('./routes/apiRoutes/studentCourseApiRoutes');
const studentCourseRoutes = require('./routes/studentCourseRoutes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use('/', indexRoutes);
app.use('/', studentRoutes);
app.use('/', courseRoutes);
app.use('/', studentCourseRoutes);

app.use('/api', studentAPIRoutes);
app.use('/api', courseAPIRoutes);
app.use('/api', studentCourseAPIRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
