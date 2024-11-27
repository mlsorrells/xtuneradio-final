const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const bodyParser = require('body-parser');
const User = require('./models/User');
const Timeslot = require('./models/Timeslot');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true,
}));

mongoose.connect('mongodb://localhost/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware to check user session
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  next();
});

// Render the login page
app.get('/login', (req, res) => {
    res.render('login'); // Create a login.ejs page
  });
  
app.post('/login', async (req, res) => {
const { username } = req.body;
const user = await User.findOne({ username });
if (user) {
    req.session.user = user;
    res.redirect('/');
} else {
    res.send('Invalid login');
}
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

// Render the days page
app.get('/', async (req, res) => {
    if (!req.session.user) return res.redirect('/login');
    res.render('index', { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] });
});

// Render the times page
app.get('/times/:day', async (req, res) => {
    const times = await Timeslot.find({ day: req.params.day }).populate('assignedDJ');
    res.render('times', { day: req.params.day, times });
});

// Render the report page
app.get('/report/:id', async (req, res) => {
    const timeslot = await Timeslot.findById(req.params.id).populate('assignedDJ');
    res.render('report', { timeslot });
});

// Render the Assign DJ page
app.get('/assigndj/:id', async (req, res) => {
    const timeslot = await Timeslot.findById(req.params.id);
    const djs = await User.find({ role: 'dj' });
    res.render('assigndj', { timeslot, djs });
});

app.post('/assigndj/:id', async (req, res) => {
    const { djId } = req.body;
    const dj = await User.findOne({ _id: djId, role: 'dj' });
    if (!dj) return res.send('Invalid DJ');
    await Timeslot.findByIdAndUpdate(req.params.id, { assignedDJ: dj._id });
    res.redirect(`/times/${req.body.day}`);
});
