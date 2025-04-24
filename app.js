const path = require('path');
const express = require('express');
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');
const messageRouter = require('./routes/messageRouter');
const CustomNotFoundError = require('./errors/CustomNotFoundError');
require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // parse forms
app.use(express.static(path.join(__dirname, 'public'))); // serve static assets

// View engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Routes
app.use('/new', newMessageRouter);
app.use('/message', messageRouter);
app.use('/', indexRouter);

// Error middleware function
app.use((req, res, next) => {
  throw new CustomNotFoundError('Page not found.');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).render('error', { error: err });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
