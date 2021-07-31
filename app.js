const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes/routes');

const app = express();
app.use('/',router());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



module.exports = app;
