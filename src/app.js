const express = require('express');
const mysql = require('mysql2/promise');
const bodyParser = require('body-parser');
const app = express();
const { registerUser, loginUser } = require('./control/auth');

app.use(bodyParser.json());

app.post('/register', registerUser);
app.post('/login', loginUser);

module.exports = app;