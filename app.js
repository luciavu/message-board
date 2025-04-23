const path = require('path');
const express = require('express');
const app = express();
const indexRouter = require('./routes/indexRouter');
const newMessageRouter = require('./routes/newMessageRouter');

// Setup
app.use(express.json());

// Set view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set routes
app.use('/new', newMessageRouter);
app.use('/', indexRouter);
