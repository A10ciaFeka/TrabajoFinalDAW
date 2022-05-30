const usuarioController = {};
const Usuario = require('../models/Usuario')
const TokenGenerator = require('uuid-token-generator');

mostrarResultados = (err,resultado,res)=>{
    if(err){  
        res.json(err);
    }else{
        res.json(resultado);
    }
}

usuarioController.login = (req,res)=>{
    Usuario.login(req,(err,resultado)=>{
        if(err){
            res.json(err);
        }else{
            const tokgen = new TokenGenerator();
            resultado.token = tokgen.generate();
            res.json(resultado);
        }
    });
}

/** --- GET REQUESTS --- */
/**
 * Obtener todos los usuarios.
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
usuarioController.listar = (req,res) => { 

    Usuario.listarUsuarios(req, (err,resultado)=>{
        if(err){
            res.json(err);
        } else {
            res.json(resultado);
        }
    });
};

/**
 * Obtener un usuario por su id
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.usuarioById = (req,res) => {
    
    Usuario.usuarioPorId(req, (err,resultado)=>{
        if(err){
            res.json(err);
        }else{
            res.json(resultado.pop());
        }
    })
}

/**
 * Obtener un usuario por su apodo
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.usuarioPorApodo = (req,res) => {
    
    Usuario.usuarioPorApodo(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

/**
 * Listar los amigos de un usuario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.listarSeguidores = (req,res) =>{
    
    Usuario.listarSeguidores(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

/**
 * Listar los seguidos de un usuario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
 usuarioController.listarSeguidos = (req,res) =>{
    
    Usuario.listarSeguidos(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

usuarioController.listarIdAmigos = (req,res) => {

    Usuario.listarIdAmigos(req, (err,resultado)=>{
        if(err) res.json(err);

        let arrayId = [];
        resultado.forEach(usuario => {
            arrayId.push(usuario.id_usuario);
        });
        res.json(arrayId);
    })
}

/** --- POST REQUESTS --- */
/**
 * Crear un nuevo usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.crearUsuario = (req, res) => {

    Usuario.crearUsuario(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });

}

usuarioController.seguirUnUsuario = (req, res) => {

    Usuario.seguirUnUsuario(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

/** --- PUT REQUESTS --- */
/**
 * Actualizar los datos de un usuario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.editarUsuario = (req,res) => {

    Usuario.editarUsuario(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    })
}

/** --- DELETE REQUESTS --- */
/**
 * Dejar de seguir a un usuario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
 usuarioController.dejarDeSeguirUsuario = (req,res) => {

    Usuario.dejarDeSeguirUsuario(req,(err,resultado)=>{
        mostrarResultados(err,resultado,res);
    })
}

// EXPORTACIÓN DEL MÓDULO
module.exports = usuarioController;