const express = require('express')
const router = express.Router()
const UsuarioControle = require('../controllers/UsuarioControle')

router.post('/cadastro', UsuarioControle.cadastro)

