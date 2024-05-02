const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const connection = require("../src/db/connection.js");

const app = express();

app.use(session({
  secret: 'webcrafters',
  resave: true,
  saveUninitialized: false
}));

app.use(bodyParser.urlencoded({ extended: true }));


app.get('src/routes/login', (req, res) => {
  res.sendFile('_site/login.html');
});

app.get('src/routes/login', (req, res) => {
  const { login, senha } = req.body;
  
connection.query('SELECT * FROM usuarios WHERE username = ? AND password = ?', [login, senha], (error, results, fields) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    if (results.length > 0) {
      res.send('Login bem-sucedido!');
      req.session.loggedin = true;
      req.session.login = login;
      res.redirect('../../_site/home.html'); 
    } else {
      res.send('Credenciais inválidas!');
    }
  });
});

app.get('/_site/', (req, res) => {
  if (req.session.loggedin) {
      res.send(`Bem-vindo, ${req.session.login}!`);
  } else {
      res.send('Faça login para acessar esta página!');
  }
});