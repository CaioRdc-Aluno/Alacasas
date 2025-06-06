const express = require('express');
const app = express();
const cors = require('cors');
const Usuario = require('./controllers/UsuarioControle');
const PORT = 3000;
const dataBase = require('.connection/connection')

app.use(cors());
app.use(express.json());
app.use("/", Usuario);

app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`));

app.post("/cadastro", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Valores dos campos inválidos..." });
    }
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
        dataBase.query(query, [name, email, password], (err) => {
            if (err) {
                if (err.code === "ER_DUP_ENTRY") {
                    return res.status(400).json({ message: "Email já está cadastrado." });
                }
                return res.status(500).json({ message: "Erro ao cadastrar o usuário." });
            }
            res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
        });
    });

app.post("/login", (req, res) => {
    const { email, password } = req.body;

    const query = "SELECT * FROM users WHERE email = ? AND password = ?";
    dataBase.query(query, [email, password], (err, result) => {
        if (err)
            return res.status(500).json({ message: "Erro ao buscar usuário." });

        if (result.length === 0) {
            return res.status(401).json({ message: "Email ou senha incorretos." });
        }

        const senhaValida = await bcrypt.compare(password, user.password);
        if (!senhaValida)
            return res.status(401).json({ message: "Email ou senha incorretos." });

        const user = result[0];
        res.status(200).json({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    });
});

