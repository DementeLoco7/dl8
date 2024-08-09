const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta para /register
app.use('/register', require('./routes/register'));

// Ruta para /create-profile
app.use('/create-profile', require('./routes/createProfile'));

// Ruta para /dashboard
app.use('/dashboard', require('./routes/dashboard'));

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});
