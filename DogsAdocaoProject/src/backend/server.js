const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "aluno",
  database: "dogsbanco",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

// Rota para criar usuário
app.post("/api/createUser", (req, res) => {
  const { username, password } = req.body; // Alterado de 'name' e 'email' para 'username' e 'password'
  const query = "INSERT INTO Users (username, password) VALUES (?, ?)"; // Corrigido para 'username' e 'password'
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      res.status(500).send("Erro ao criar usuário");
    } else {
      console.log("Usuário criado com sucesso");
      res.send(result);
    }
  });
});

// Rota para buscar usuários
app.get("/api/readSobre", (req, res) => {
  const query = "SELECT * FROM sobre";
  db.query(query, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

// Rota para efetuar o login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM Users WHERE username = ? AND password = ?";
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Erro ao realizar login:", err);
      res
        .status(500)
        .send("Erro ao realizar login. Por favor, tente novamente mais tarde.");
    } else {
      if (results.length > 0) {
        res.status(200).send("Login bem-sucedido");
      } else {
        res.status(401).send("Credenciais incorretas");
      }
    }
  });
});

app.listen(port, () => {
  console.log("----Login (MySQL version)-----");
  console.log(`Servidor rodando na porta ${port}`);
});
