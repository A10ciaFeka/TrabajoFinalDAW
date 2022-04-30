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
    console.log('llego');
    Usuario.login(req,(err,resultado)=>{
        if(err){
            res.json(err);
        }else{
            // Metemos la foto
            resultado.usuario_fotoPerfil = `localhost:3000/usuario/${resultado.id_usuario}/foto`;
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
            for (const key in resultado) {
                resultado[key].usuario_fotoPerfil = `localhost:3000/usuario/${resultado[key].id_usuario}/foto`;
            }
            res.json(resultado);
        }
    });
};

/**
 * Obtener la foto de un usuario por su id.
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.fotoPerfilPorId = (req,res) => {
    
    Usuario.fotoPerfilPorId(req, (err, resultado)=>{
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
    })
}

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
            // Metemos la foto
            resultado.usuario_fotoPerfil = `localhost:3000/usuario/${resultado.id_usuario}/foto`;
            res.json(resultado);
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
        if(err){
            res.json(err);
        }else{
            // Metemos la foto
            resultado.usuario_fotoPerfil = `localhost:3000/usuario/${resultado.id_usuario}/foto`;
            res.json(resultado);
        }
    });
}

/**
 * Listar los amigos de un usuario.
 * 
 * @param {*} req 
 * @param {*} res 
 */
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

// EXPORTACIÓN DEL MÓDULO
module.exports = usuarioController;