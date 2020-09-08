// Variables
const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require("body-parser");

const titleStudents = 'Students list'
const titleForm = 'Add students'
const students = [];

// Config express & port
const port = 4000;
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve bootstrap static
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

// Routes & main application
app.get('/', function (req, res) {
    res.render('home', {
      titleStudents,
      students,
      titleForm
    });
});

// Form configuration
app.route('students/add').post((req, res) => {
  console.log('username :', req.body.username);
  let username = req.body.username;
  // students.push(res.body.username);
  // console.log(students);
  // res.send(students);
  res.send(username + 'is added succesfuly');
});

// Run server on port :3000
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});