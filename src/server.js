require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.json({ status: "API Checklist no ar" }));
app.use("/atividades", require("./routes/atividades"));

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB conectado");
    app.listen(PORT, "0.0.0.0", () => console.log(`Servidor na porta ${PORT}`));
  })
  .catch((err) => {
    console.error("Erro ao conectar no MongoDB:", err.message);
    process.exit(1);
  });
