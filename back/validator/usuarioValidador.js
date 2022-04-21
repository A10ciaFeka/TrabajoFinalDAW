const usuarioValidador = {};

usuarioValidador.validarApodo = (conn, usuario_apodo, callback) => {
    const sql = `SELECT * FROM usuario WHERE usuario_apodo='${usuario_apodo}'`;

    conn.query(sql,(err,usuario)=>{
        return callback(err, usuario.length === 0);
    });
}

// usuarioValidador.editarUsuario = (conn, nuevo_nickname, callback) => {
//     const sql = 
// }

module.exports = usuarioValidador;