
const Producto = {

    listarProductos: (req, callback) => {
        const sql = 'SELECT * FROM producto ORDER BY producto_fechaSalida DESC';

        req.getConnection((err,conn) => {
            
            if(err) {
                return callback(err);
            }else {
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

    productoPorId: (req, callback) => {
        const id_producto = req.params.id_producto;
        const sql = 'SELECT * FROM producto WHERE id_producto='+id_producto;

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

    productoPorNombre: (req, callback) => {
        console.log(req.params.producto_nombre);
        const sql = `SELECT * FROM producto WHERE producto_nombre='${req.params.producto_nombre}'`;

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

    crearProducto: (req, callback) => {
        const {
            producto_nombre,
            producto_sinopsis,
            producto_fechaSalida,
            producto_disponible,
            producto_plataforma} = req.body;

        const sql = `INSERT INTO producto VALUES (
                        '',
                        '${producto_nombre}',
                        '${producto_sinopsis}',
                        '${producto_fechaSalida}',
                        '${producto_disponible}',
                        '0',
                        '0.0',
                        '${producto_plataforma}','')`;

        req.getConnection((err,conn) => {
            
            if(err) {
                return callback(err);
            } else {

                conn.query(sql, (err,resultado)=>{
                    if(err) {
                        return callback(err);
                    } else {
                        return callback({'id_producto':resultado.insertId});
                    }
                });
            }
            
        });
    },

    editarProducto: (req, callback) => {
        
        const id_producto = req.params;

        const {
            producto_nombre,
            producto_sinopsis,
            producto_fechaSalida,
            producto_disponible,
            producto_likes,
            producto_notaMedia,
            producto_plataforma} = req.body;

        const sql = `UPDATE product SET (
                        '${id_producto}',
                        '${producto_nombre}',
                        '${producto_sinopsis}',
                        '${producto_fechaSalida}',
                        '${producto_disponible}',
                        '${producto_likes}',
                        '${producto_notaMedia}',
                        '${producto_plataforma}','')`;

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            }else{
                conn.query(sql, (err)=>{
                    if(err) {
                        return callback(err);
                    } else {
                        return callback({'Resultado': 'Producto actualizado con éxito'});
                    }
                })
            }
            
        }); 
    }

}

module.exports = Producto;