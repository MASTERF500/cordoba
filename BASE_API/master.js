const mongoose = require('mongoose')

const mstSchema = new mongoose.Schema({
  _id:{
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('mst', mstSchema)