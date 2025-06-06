const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/UsuarioControle');

router.post('/cadastro', Usuario.cadastro);
router.post('/login', Usuario.login);

