const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

/**
 * 
 * PETICIONES GET PARA PRODUCTOS
 * 
 */
router.get('/listar', productoController.listar);
router.get('/:id_producto/imagen', productoController.productoImagenPorId)
router.get('/nombre/:producto_nombre', productoController.productoPorNombre);
router.get('/:id_producto', productoController.productoPorId);

/**
 * 
 * PETICIONES POST PARA PRODUCTOS
 * 
 */
router.post('/crear', productoController.crearProducto);

/**
 * 
 * PETICIONES PUT PARA PRODUCTOS
 * 
 */
router.put('/:id_producto/editar', productoController.editarProducto);

// EXPORTAMOS EL MÓDULO
module.exports = router;