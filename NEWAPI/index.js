'use strict'
//importante:
//instalamos "npm install nodemon" para no estar corriendo la consola. en package "start":"nodemon index.js"
//correr con npm start

//para leer express y bodyparser
const express=require('express')
const bodyParser=require('body-parser')
//llamando express
const app= express()
//variable y funcion para correr app en puerto
const port = process.env.PORT || 3000
//midelware: para peticiones en formato json
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//escuchar req : peticion y res : respuesta
app.get('/saludo/:name',(req,res) =>{
    res.send({message:`VIEJON! ${req.params.name}`})
})
//lavantando el servidor para escucharlo en el puerto 3000
//function es reemplazado por =>
app.listen(port,()=>{
    console.log(`SERVER LISTO ${port}`)
})