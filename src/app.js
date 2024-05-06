const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// Middleware para análise de corpo de solicitação
app.use(bodyParser.json());
app.use(cors())
// Rotas
const routes = require('./routes/routes');


app.use('/login', routes);
app.use('/registre', routes);
// Outras rotas...
// app.use('/outra-rota', outraRota);

module.exports = app;