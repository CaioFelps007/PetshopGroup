

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(
  cors({
    origin: "http://localhost:8081",
    credentials: true,
  })
);

const db = mysql.createConnection({
  host: "localhost",
  user: "phpmyadmin",
  password: "caio",
  database: "dogsbanco",
});

db.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conectado ao MySQL");
  }
});

// Rota para buscar dados
app.get("/api/readSobre", (req, res) => {
  const query = "SELECT * FROM sobre";
  db.query(query, (err, result) => {
    if (err) {
      console.error("Erro ao buscar dados:", err);
      res.status(500).send("Erro ao buscar dados");
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor rodando na porta ${port}`);
});