const passwordValidator = require('../validator/passwordValidator');
const usuarioValidador = require('../validator/usuarioValidador');

const Usuario = {

    listarUsuarios: (req, callback) => {
        
        const sql = 'SELECT id_usuario, usuario_apodo, usuario_contrasena, usuario_email, usuario_verificado, usuario_administrador FROM usuario';

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            } else {
                conn.query(sql, (err, resultado)=>{
                    return callback(err,resultado);
                });
            }

        });

    },

    fotoPerfilPorId: (req, callback) =>{
        const sql = "SELECT usuario_fotoPerfil FROM usuario WHERE id_usuario="+req.params.id_usuario;

        req.getConnection((err,conn)=>{
            
            if(err){
                return callback(err);
            }else{
                conn.query(sql, (err, blob)=>{
                    return callback(err,blob[0].usuario_fotoPerfil);
                });
            }

        });
    },
    
    usuarioPorId: (req, callback) => {
        
        const sql = "SELECT usuario_apodo, usuario_contrasena, usuario_email, usuario_verificado, usuario_administrador FROM usuario WHERE id_usuario="+req.params.id_usuario;

        req.getConnection((err,conn)=>{
            
            if(err){
                return callback(err);
            }else{
                conn.query(sql, (err, resultado)=>{
                    return callback(err,resultado);
                });
            }

        });

    },

    usuarioPorApodo: (req, callback) => {
        
        const sql = `SELECT usuario_apodo, usuario_contrasena, usuario_email, usuario_verificado, usuario_administrador FROM usuario WHERE usuario_apodo='${req.params.usuario_apodo}'`;

        req.getConnection((err,conn)=>{
            
            if(err){
                return callback(err);
            }else{
                conn.query(sql, (err, resultado)=>{
                    return callback(err,resultado);
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
                    return callback(err,resultado);

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
                                
                                return callback(err,{'id_usuario':resultado.insertId});
                            });
                        }
                    }
                })

            }

        });

    },

    editarUsuario: (req,callback) => {
    
        // cambio_apodo boolean para controlar si el usuario cambia o no de apodo, para que sea comprobado.
        const {
            id_usuario,
            usuario_apodo,
            usuario_contrasena,
            usuario_email,
            cambio_apodo} = req.body;
              

        const hashedPwd = passwordValidator.setPassword(usuario_contrasena);

        const sql = `UPDATE usuario 
                        SET usuario_apodo = '${usuario_apodo}',
                        usuario_contrasena = '${hashedPwd}',
                        usuario_email = '${usuario_email}'
                        WHERE id_usuario = ${id_usuario}`;

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            }else{
                // Si se pasa a true es que el usuario quiere un apodo nuevo, por ello se ha de comprobar.
                if(cambio_apodo) {

                    usuarioValidador.validarApodo(conn,usuario_apodo,(err,valido)=>{
                        if(err){
                            return callback(err);
                        }else{
                            if(!valido){
                                return callback({'error': 'El nick de usuario ya está en uso'});
                            }else{
                                conn.query(sql, (err)=>{
                                    return callback(err,{'Resultado': 'Usuario actualizado con éxito'});
                                });
                            }
                        }
                    });
                    
                }else{

                    conn.query(sql, (err)=>{
                        return callback(err,{'Resultado': 'Usuario actualizado con éxito'});
                    });
                }

            }
            
        });

    },

    login: (req, callback)=>{
        const {usuario_apodo,usuario_contrasena} = req.body;

        req.getConnection((err,conn)=>{
            if(err){
                return callback(err);
            }else{

                usuarioValidador.validarApodo(conn,usuario_apodo,(err,no_existe)=>{
                    if(err){
                        return callback(err);
                    }else{

                        if(no_existe){
                            return callback({"Error": "El usuario no existe"});
                        }else{
                            const sql = `SELECT id_usuario, usuario_apodo, usuario_contrasena, usuario_email, usuario_verificado, usuario_administrador FROM usuario WHERE usuario_apodo='${usuario_apodo}'`;
                            conn.query(sql,(err,usuario)=>{
                                if(err){
                                    return callback(err);
                                }else{
                                    console.log(usuario[0].usuario_contrasena);
                                    if(passwordValidator.comparePassword(usuario_contrasena,usuario[0].usuario_contrasena)){
                                        return callback(null,usuario[0]);
                                    }else{
                                        return callback({"Error": "Las contraseñas no coinciden"});
                                    }
                                }
                            });
                            
                        }

                    }
                })

            }
        });
    },

    seguirUnUsuario: (req,callback) => {
        const {id_usuario, id_amigo} = req.body;

        req.getConnection((err,conn)=>{
            if(err){
               return callback(err);
            }else{
                
                const sql = `INSERT INTO lista_amigos VALUES(${id_usuario},${id_amigo})`;

                conn.query(sql,(err,resultado)=>{
                    return callback(err,{"Resultado": "Usuario actualizado con éxito"});
                });
            }
        });

    }

}

module.exports = Usuario;