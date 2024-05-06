const bcrypt = require('bcrypt');
const connection = require('../db/conn');

async function registerUser(req, res) {
  const {email, senha} = req.body;


  const cryptSenha = await bcrypt.hash(senha, 10);

  try {
    const connection = await connection();
    const [result] = await connection.execute('INSERT INTO usuarios (email, senha) VALUES (?, ?)', [email, cryptSenha]);
    await connection.end();
    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

async function loginUser(req, res) {
  const { email, senha } = req.body;

  try {
    const connection = await connection();
    const [rows] = await connection.execute('SELECT * FROM usuarios WHERE email = ?', [email]);
    await connection.end();

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Nome de usuário ou senha incorretos' });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(senha, user.senha);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Nome de usuário ou senha incorretos' });
    }

    res.json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

module.exports = { registerUser, loginUser };