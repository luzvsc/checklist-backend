const router = require("express").Router();
const Atividade = require("../models/Atividade");

function tratarErro(res, err) {
  if (err.name === "ValidationError") {
    return res.status(400).json({ erro: Object.values(err.errors)[0].message });
  }
  if (err.name === "CastError") {
    return res.status(400).json({ erro: "ID inválido" });
  }
  console.error(err);
  return res.status(500).json({ erro: "Erro interno do servidor" });
}

// CREATE
router.post("/", async (req, res) => {
  try {
    const atividade = await Atividade.create({ titulo: req.body.titulo });
    res.status(201).json(atividade);
  } catch (err) {
    tratarErro(res, err);
  }
});

// READ
router.get("/", async (req, res) => {
  try {
    const atividades = await Atividade.find().sort({ createdAt: -1 });
    res.json(atividades);
  } catch (err) {
    tratarErro(res, err);
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { titulo, concluida } = req.body;
    const campos = {};
    if (titulo !== undefined) campos.titulo = titulo;
    if (concluida !== undefined) campos.concluida = concluida;

    const atividade = await Atividade.findByIdAndUpdate(req.params.id, campos, {
      new: true,
      runValidators: true,
    });
    if (!atividade)
      return res.status(404).json({ erro: "Atividade não encontrada" });
    res.json(atividade);
  } catch (err) {
    tratarErro(res, err);
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const atividade = await Atividade.findByIdAndDelete(req.params.id);
    if (!atividade)
      return res.status(404).json({ erro: "Atividade não encontrada" });
    res.status(204).send();
  } catch (err) {
    tratarErro(res, err);
  }
});

module.exports = router;
