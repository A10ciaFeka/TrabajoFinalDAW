const passwordValidator = require('../validator/passwordValidator');
const usuarioValidador = require('../validator/usuarioValidador');

const Usuario = {

    listarUsuarios: (req, callback) => {
        
        const sql = 'SELECT * FROM usuario';

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            } else {
                conn.query(sql, (err, resultado)=>{
                    if (err) {
                        return callback(err);
                    }else{
                        return callback(null,resultado);
                    }
                });
            }

        });

    },

    usuarioPorId: (req, callback) => {
        
        const sql = "SELECT * FROM usuario WHERE id_usuario="+req.params.id_usuario;

        req.getConnection((err,conn)=>{
            
            if(err){
                return callback(err);
            }else{
                conn.query(sql, (err, resultado)=>{
                    if (err) {
                        return callback(err);
                    }else{
                        console.log(resultado);
                        return callback(resultado);
                    }
                });
            }

        });

    },

    usuarioPorApodo: (req, callback) => {
        
        const sql = `SELECT * FROM usuario WHERE usuario_apodo='${req.params.usuario_apodo}'`;

        req.getConnection((err,conn)=>{
            
            if(err){
                return callback(err);
            }else{
                conn.query(sql, (err, resultado)=>{
                    if (err) {
                        return callback(err);
                    }else{
                        return callback(resultado[0]);
                    }
                });
            }

        });

    },

    listarAmigos: (req, callback) => {

        const sql = `SELECT usu.*
                        FROM usuario usu
                        INNER JOIN lista_amigos amigo on amigo.id_amigo = usu.id_usuario
                        WHERE amigo.id_usuario = ${req.params.id_usuario}`;
        
        req.getConnection((err,conn)=>{

            if(err){
                return callback(err);
            }else{
                conn.query(sql, (err, resultado)=>{
                    if (err) {
                        return callback(err);
                    }else{
                        return callback(resultado);
                    }
                });
            }

        });

    },

    crearUsuario: (req, callback) => {
        
        const {usuario_apodo,
               usuario_contrasena,
               usuario_email} = req.body;
        console.log();
        const hashedPwd = passwordValidator.setPassword(usuario_contrasena);

        const sql = `INSERT INTO usuario VALUES(
                        '',
                        '${usuario_apodo}',
                        '${hashedPwd}',
                        '${usuario_email}',
                        '0',
                        '',
                        '0')`;
        
        req.getConnection((err,conn) => {
            
            // Error de conexión
            if(err) {
                return callback(err);
            } else {
                usuarioValidador.validarApodo(conn, usuario_apodo, (err, valido) => {
                    
                    if(err){
                        return callback(err);
                    }else{
                        if(!valido){
                            return callback({ 'error': 'El nick de usuario ya está en uso' });
                        }else{
                            conn.query(sql, (err,resultado)=>{
                                if(err) {
                                    return callback(err);
                                } else {
                                    return callback({'id_usuario':resultado.insertId});
                            }});
                        }
                    }
                })

            }

        });

    },

    editarUsuario: (req,callback) => {
    
        
        const {
            id_usuario,
            usuario_apodo,
            usuario_contrasena,
            usuario_email} = req.body;
              
        const hashedPwd = passwordValidator.setPassword(usuario_contrasena);

        const sql = `UPDATE usuario SET(
                    '${id_usuario}',
                    '${usuario_apodo}',
                    '${hashedPwd}',
                    '${usuario_email}',
                    '0',
                    '',
                    '0')`;

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            }else{
                conn.query(sql, (err)=>{
                    if(err) {
                        return callback(err);
                    } else {
                        return callback({'Resultado': 'Usuario actualizado con éxito'});
                    }
                })
            }
            
        });

    }

}

module.exports = Usuario;