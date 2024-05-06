const { connectToDB } = require('../db/conn');

async function createUser(username, password) {
  try {
    const connection = await connectToDB();
    const [result] = await connection.execute('INSERT INTO usuarios (username, password) VALUES (?, ?)', [username, password]);
    await connection.end();
    return result.insertId;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw error;
  }
}


async function findUserByUsername(email, senha) {
  try {
    const connection = await connectToDB();
    const [rows] = await connection.execute('SELECT email, senha FROM usuarios WHERE email = ? AND senha = ? ', [email, senha]);
    await connection.end();
    return rows[0]; 
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
}

module.exports = { createUser, findUserByUsername };