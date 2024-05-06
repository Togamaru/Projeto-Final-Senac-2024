const connection = require("../src/db/conn");

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }
  
  try {
    // Use a conexão importada do arquivo conn.js
    const conn = await connection;

    const [rows] = await conn.execute('SELECT * FROM usuarios WHERE email = ? AND senha = ?', [email, senha]);

    if (rows.length > 0) {
      return res.status(200).json({ message: 'Login bem-sucedido!' });
    } else {
      return res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    return res.status(500).json({ message: 'Erro interno do servidor.' });
  }
});
