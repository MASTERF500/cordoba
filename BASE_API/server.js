const express = require('express')
const app = express()
const mongoose = require('mongoose')
const User = require('./users')
const Usuario = require('./usuarios')

mongoose.connect('mongodb://localhost/refacc', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', async () => {
  if (await Usuario.countDocuments().exec() > 0) return

  Promise.all([
    Usuario.create({ name: 'Edwin C.',email:'magnumf500@gmail.com',rol:'admin' }),
    Usuario.create({ name: 'Edwin A.',email:'mag@gmail.com',rol:'admin' }),
  ]).then(() => console.log('Added Users'))
})

app.get('/usuarios', paginatedResults(Usuario), (req, res) => {
  res.json(res.paginatedResults)
})

app.get('/users', paginatedResults(User), (req, res) => {
  res.json(res.paginatedResults)
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