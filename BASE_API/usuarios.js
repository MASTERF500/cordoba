const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
  _id:{
    type: Object,
    required: false
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: false
  },
  rol: {
    type: String,
    required: false
  }
})

module.exports = mongoose.model('Usuario', usuarioSchema)