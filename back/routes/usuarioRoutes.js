const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController');


/**
 * 
 * PETICIONES GET PARA USUARIOS
 * 
 */
router.get('/listar', usuarioController.listar);
router.get('/:id_usuario', usuarioController.usuarioById);
router.get('/:nickname', usuarioController.usuarioPorApodo);
router.get('/:id_usuario/amigos', usuarioController.listarAmigos);

/**
 * 
 * PETICIONES POST PARA USUARIOS
 * 
 */
router.post('/crear', usuarioController.crearUsuario);

/**
 * 
 * PETICIONES PUT PARA USUARIOS
 * 
 */
router.put('/:id_usuario/editar', usuarioController.editarUsuario);

// EXPORTACIÓN DEL MÓDULO
module.exports = router;