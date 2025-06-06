const express = require('express');
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt'); // Faltando no original
const Usuario = require('./controllers/UsuarioControle');
const dataBase = require('./connection/connection'); // Corrigido o caminho
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/", Usuario);

app.post("/cadastro", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Valores dos campos inválidos..." });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        dataBase.query(query, [name, email, hashedPassword], (err) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "Email já está cadastrado." });
                }
                return res.status(500).json({ message: "Erro ao cadastrar o usuário." });
            }
            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        });
    } catch (error) {
        res.status(500).json({ message: "Erro ao processar o cadastro." });
    }
});

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));