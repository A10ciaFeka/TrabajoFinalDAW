const usuarioController = {};
const Usuario = require('../models/Usuario')

mostrarResultados = (err,resultado,res)=>{
    if(err){  
        res.json(err);
    }else{
        res.json(resultado);
    }
}


/** --- GET REQUESTS --- */
/**
 * Obtener todos los usuarios
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
usuarioController.listar = (req,res) => { 

    Usuario.listarUsuarios(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
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
        mostrarResultados(err,resultado,res);
    })
}

/**
 * Get user by it's username
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.usuarioPorApodo = (req,res) => {
    
    Usuario.usuarioPorApodo(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
}

usuarioController.listarAmigos = (req,res) =>{
    
    Usuario.listarAmigos(req, (err,resultado)=>{
        mostrarResultados(err,resultado,res);
    });
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

// EXPORTACIÓN DEL MÓDULO
module.exports = usuarioController;