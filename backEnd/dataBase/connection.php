<?php
// Dados de conexão
$servername = "localhost";
$username = "root"; // altere conforme o seu usuário
$password = ""; // altere conforme a sua senha
$dbname = "Alacasas_db"; // nome do banco de dados

// Cria a conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica se houve erro na conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}

// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recebe o nome enviado pelo formulário
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    // Prepara a query SQL para inserção no banco
    $sql = "INSERT INTO usuarios (email, senha) VALUES ('$email', '$senha')";

    // Executa a query e verifica se foi bem-sucedida
    if ($conn->query($sql) === TRUE) {
        echo "Login efetuado com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
    }
}

// Fecha a conexão
$conn->close();
?>