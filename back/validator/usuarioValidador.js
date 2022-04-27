const usuarioValidador = {};

usuarioValidador.validarApodo = (conn, usuario_apodo, callback) => {
    const sql = `SELECT id_usuario FROM usuario WHERE usuario_apodo='${usuario_apodo}'`;

    conn.query(sql,(err,usuario)=>{
        return callback(err, usuario.length === 0);
    });
}

module.exports = usuarioValidador;