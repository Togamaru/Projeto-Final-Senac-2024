const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware para análise de corpo de solicitação
app.use(bodyParser.json());

// Rotas
const routes = require('./routes/routes');
app.use('/login', routes);

// Outras rotas...
// app.use('/outra-rota', outraRota);

module.exports = app;