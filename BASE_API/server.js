const express = require('express')
const app = express()
const mongoose = require('mongoose')
//rutas
const User = require('./users')
const Usuario = require('./usuarios')
const mstx = require('./master')

//Conexión con MongoDB
mongoose.connect('mongodb://localhost/pagination', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection


app.get('/users', paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults)
})

app.get('/mst', async (req, res) => {
  try {
    const usdatos = await mstx.find()
    res.json(usdatos)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})


function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page)
    const limit = parseInt(req.query.limit)

    const startIndex = (page - 1) * limit
    const endIndex = page * limit

    const results = {}

    if (endIndex < await model.countDocuments().exec()) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }
    
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec()
      res.paginatedResults = results
      next()
    } catch (e) {
      res.status(500).json({ message: e.message })
    }
  }
}

app.listen(3000)