const { model, Schema } = require("mongoose");

const CharacterSchema = Schema({
  nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
  },

  fuerza: {
    type: Number,
    required: true,
  },

  destreza: {
    type: Number,
    required: true,
  },

  agilidad: {
    type: Number,
    required: true,
  },

  defensa: {
    type: Number,
    required: true,
  },

  suerte: {
    type: Number,
    required: true,
  },
});

CharacterSchema.methods.toJSON = function () {
  const { __v, ...character } = this.toObject();
  return character;
};

module.exports = model("Character", CharacterSchema);
