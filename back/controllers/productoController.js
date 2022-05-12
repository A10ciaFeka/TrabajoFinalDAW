const productoController = {};
const Producto = require('../models/Producto');

mostrarResultados = (err,resultado,res)=>{
    if(err){  
        res.json(err);
    }else{
        res.json(resultado);
    }
}   

/** --- GET REQUESTS --- */
/**
 * Obtener todos los productos.
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoController.listar = (req,res) => {
    Producto.listarProductos(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

/**
 * Obtener los productos que salieron recientemente.
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoController.salidasRecientes = (req,res)=>{
    Producto.salidasRecientes(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    })
}

/**
 * Obtener un producto por su id
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.productoPorId = (req,res) => {
    Producto.productoPorId(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

/**
 * Obtener un producto por su nombre
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.productoPorNombre = (req,res) => {
    Producto.productoPorNombre(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

/** --- POST REQUEST --- */
/**
 * Crear un nuevo producto.
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoController.crearProducto = (req,res) => {
    Producto.crearProducto(req, (err,resultado)=>{
        
        mostrarResultados(err,resultado,res);
    });
}


/** --- UPDATE REQUEST --- */
/**
 * Actualizar los datos de un producto.
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.editarProducto = (req,res) => {
    Producto.editarProducto(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

module.exports = productoController;