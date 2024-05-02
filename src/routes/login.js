const express = require('express');
const bodyParser = require('body-parser');
const connection = require("../db/conn");

const app = express();

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    
    console.log(email, senha);

    connection.query('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha], (error, results, fields) => {
        if (error) {
            console.error('Erro ao executar a consulta:', error);
            res.status(500).json({ error: 'Erro interno do servidor' });
            return;
        }

        if (results.length > 0) {
            res.json({ message: 'Login bem-sucedido!' });
        } else {
            res.status(401).json({ error: 'Credenciais inválidas!' });
        }
    });
});

app.listen(8080, () => {
    console.log('Servidor rodando em http://localhost:8080');
});