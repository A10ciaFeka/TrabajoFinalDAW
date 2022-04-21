const express = require('express');
const router = express.Router();

const productoController = require('../controllers/productoController');

/**
 * 
 * PETICIONES GET PARA PRODUCTOS
 * 
 */
router.get('/listar', productoController.listar);
router.get('/:nombre', productoController.productoByNombre);
router.get('/:id_producto', productoController.productoById);

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
router.put('/:id_producto/editar', productController.updateProduct);
