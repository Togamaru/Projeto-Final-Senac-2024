const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require("./src/routes/userRoutes");
const { userLogin } = require('./src/db/dbUser');


app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/user", userRoutes);

module.exports = app;
