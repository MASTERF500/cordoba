//Importamos la herramienta de mongoose para ralizar un schema de una tabla
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    nombre: {
        type:String,
        unique:true,
        require: true
    },
    precio: {
        type:Number,
        require: true
    } ,
    categoria: {
        type:String,
        require: true,
        enum:['Niños', 'Hogar', 'Entretenimeinto']
    },
    existencia: {
        type:Number,
        default:10
    },
    fecha: {
        type:Date,
        default: Date.now()
    }
})

const Producto = mongoose.model('Producto', productSchema);

module.exports= Producto;

var entrar = document.getElementById(entrarCliente());
function entrarCliente(){
	console.log('Hola Cliente');

}