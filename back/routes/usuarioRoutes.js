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
router.get('/apodo/:usuario_apodo', usuarioController.usuarioPorApodo);
router.get('/:id_usuario/seguidores', usuarioController.listarSeguidores);
router.get('/:id_usuario/seguidos', usuarioController.listarSeguidos);
router.get('/:id_usuario/amigos_id', usuarioController.listarIdAmigos);
router.get('/login/:usuario_apodo/:usuario_contrasena', usuarioController.login);

/**
 * 
 * PETICIONES POST PARA USUARIOS
 * 
 */
router.post('/crear', usuarioController.crearUsuario);
router.post('/seguir_usuario', usuarioController.seguirUnUsuario);

/**
 * 
 * PETICIONES PUT PARA USUARIOS
 * 
 */
router.put('/:id_usuario/editar', usuarioController.editarUsuario);

/**
 * 
 * PETICIONES DELETE PARA USUARIOS
 * 
 */
 router.delete('/dejar_seguir_usuario', usuarioController.dejarDeSeguirUsuario);

// EXPORTACIÓN DEL MÓDULO
module.exports = router;