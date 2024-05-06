const express = require('express');
const router = express.Router();

// Importar controladores ou lógica de rota necessária
const { loginUser, registerUser } = require('../controllers/authController');

// Rota para o login
router.post('/', loginUser);

// Rota para o registro de usuário
router.post('/register', registerUser);

module.exports = router;