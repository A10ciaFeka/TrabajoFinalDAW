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
        if(err) {
            res.json(err);
        }else {
            console.log(resultado);
            for (const key in resultado.resultados) {
                resultado.resultados[key].producto_imagen = `localhost:3000/producto/${resultado.resultados[key].id_producto}/imagen`;
            }
            res.json(resultado);
        }
    });
}

/**
 * Obtener un producto por su id
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.productoPorId = (req,res) => {
    Producto.productoPorId(req, (err,resultado)=>{
        if(err){
            res.json(err)
        }
        else{
            resultado.producto_imagen = `localhost:3000/producto/${resultado.id_producto}/imagen`
            res.json(resultado);
        }
    });
}

/**
 * Obtener la imagen de un producto servida para el navegador
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoController.productoImagenPorId = (req,res) => {
    Producto.productoImagenPorId(req, (err,resultado)=>{

        if(err){
            res.json(err);
        }else{
            const file = Buffer.from(resultado,'binary');
            res.writeHead(200,{
                'Content-Type': 'image/jpeg',
                'Content-Length': file.length
            });
            res.end(file);
        }
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