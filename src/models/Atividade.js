const mongoose = require("mongoose");

const atividadeSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: [true, "O título é obrigatório"],
      trim: true,
    },
    concluida: { type: Boolean, default: false },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Atividade", atividadeSchema);
