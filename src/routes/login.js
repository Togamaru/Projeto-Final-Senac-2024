const conn = require(./)
app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
    if (error) {
      console.error('Erro ao executar a consulta:', error);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    if (results.length > 0) {
      res.send('Login bem-sucedido!');
    } else {
      res.send('Credenciais inválidas!');
    }
  });
});
