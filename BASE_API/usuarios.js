const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true},
  rol: {
        type: String,
        required: true}
})

module.exports = mongoose.model('Usuarios', usuarioSchema)