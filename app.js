
const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require("./src/routes/userRoutes");
const bodyParser = require('body-parser');


app.use(express.json());
app.use(cors())
app.use("/user", userRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app;
