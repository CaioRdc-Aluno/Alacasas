
const express = require('express');
const app = express();
const cors = require('cors');
const Usuario = require('./controllers/UsuarioControle')
app.use(cors());
app.use(express.json());
app.use('/',Usuario)

const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));