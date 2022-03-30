const usuarioController = {};


/**
 * Listar usuarios
 * 
 * @param {*} req 
 * @param {*} res 
 */
usuarioController.listar = (req,res)=>{ 
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario', (err,  usuario)=>{
            if (err) {
                res.json(err);
            }
            res.json(usuario);
        });
    });
};


module.exports = usuarioController;