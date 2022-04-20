const usuarioController = {};
const passwordValidator = require('../validator/passwordValidator');
const userValidator = require('../validator/userValidator');
const jsonDB = {'error': "No se ha podido conectar a la base de datos"};


/** --- GET REQUESTS --- */
/**
 * Obtener todos los usuarios
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
usuarioController.listar = (req,res) => { 
    const sql = 'SELECT * FROM usuario';

    req.getConnection((err,conn)=>{
        if(err) {
            res.json(...jsonDB,...err);
        }else {
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado);
                }
            });
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
    const id_usuario = req.params.id_usuario;
    const sql = "SELECT * FROM usuario WHERE id_usuario="+id_usuario;

    req.getConnection((err,conn)=>{
        
        if(err){
            res.json(...jsonDB,...err);
        }else{
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado[0]);
                }
            });
        }

    });
}

/**
 * Get user by it's username
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.usuarioByNickname = (req,res) => {
    const nickname = req.params.nickname;
    const sql = `SELECT * FROM usuario WHERE id_usuario='${nickname}'`;

    req.getConnection((err,conn)=>{
        
        if(err){
            res.json(...jsonDB,...err);
        }else{
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado[0]);
                }
            });
        }

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

    const {usuario_apodo,usuario_contrasena,usuario_email} = req.body;
    const hashedPwd = passwordValidator.setPassword(usuario_contrasena);
    const sql = `INSERT INTO users VALUES('','${usuario_apodo}','${hashedPwd}','${usuario_email}', '0', '','0')`;
    
    req.getConnection((err,conn) => {
        
        if(err) {
            res.json(...jsonDB,...err);
        } else {

            conn.query(sql, (err,resultado)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'id_usuario':resultado.insertId});
                }});
        }

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
    const id_usuario = req.params;
    const {usuario_apodo,usuario_contrasena,usuario_email} = req.body;
    const hashedPwd = passwordValidator.setPassword(usuario_contrasena);
    const sql = `UPDATE usuario SET('${id_usuario}','${usuario_apodo}','${hashedPwd}','${usuario_email}', '0', '','0')`;

    req.getConnection((err,conn) => {
        if(err) {
            res.json(...jsonDB,...err);
        }else{
            conn.query(sql, (err)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'Resultado': 'Usuario actualizado con éxito'});
                }
            })
        }
        
    });
}

// EXPORTACIÓN DEL MÓDULO
module.exports = usuarioController;