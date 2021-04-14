const mongoose = require('mongoose')

const usuarioSchema = new mongoose.Schema({
<<<<<<< HEAD
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
=======
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
>>>>>>> 3f6249d28991d6e613032b2a869906da92009209
