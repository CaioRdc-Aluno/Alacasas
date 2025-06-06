const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/UsuarioControle');

router.post('/cadastro', UsuarioControle.cadastro);
router.post('/login', UsuarioControle.login);

