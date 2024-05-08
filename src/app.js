const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// Middleware para análise de corpo de solicitação
app.use(bodyParser.json());
app.use(cors())
// Rotas
const routes = require('./routes/routes');
const userRoutes = require('./routes/userRoutes');


app.use('/login', routes);
app.use('/register', routes);
app.use("/user", userRoutes);
// app.use('/outra-rota', outraRota);

module.exports = app;