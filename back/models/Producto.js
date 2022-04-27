
const Producto = {

    listarProductos: (req, callback) => {
        const sql = `SELECT id_producto, producto_nombre, producto_sinopsis, producto_fechaSalida, producto_disponible, producto_numResenas, producto_puntuacionMedia, producto_plataforma, producto_etiqueta
                        FROM producto
                        ORDER BY producto_fechaSalida DESC`;

        req.getConnection((err,conn) => {
            
            if(err) {
                return callback(err);
            }else {
                conn.query(sql, (err, resultado)=>{
                    return callback(err,resultado);
                });
            }
            
        });
    },

    productoImagenPorId: (req, callback) => {
        const id_producto = req.params.id_producto;
        const sql = 'SELECT producto_imagen FROM producto WHERE id_producto='+id_producto;

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

    productoPorId: (req, callback) => {
        const id_producto = req.params.id_producto;
        const sql = 'SELECT id_producto, producto_nombre, producto_sinopsis, producto_fechaSalida, producto_disponible, producto_numResenas, producto_puntuacionMedia, producto_plataforma, producto_etiqueta FROM producto WHERE id_producto='+id_producto;

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

    productoPorNombre: (req, callback) => {
        console.log(req.params.producto_nombre);
        const sql = `SELECT id_producto, producto_nombre, producto_sinopsis, producto_fechaSalida, producto_disponible, producto_numResenas, producto_puntuacionMedia, producto_plataforma, producto_etiqueta FROM producto WHERE producto_nombre='${req.params.producto_nombre}'`;

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
                    return callback(err,resultado);

                });
            }
            
        });
    },

    editarProducto: (req, callback) => {
        
        const id_producto = req.params;

        const {
            producto_nombre,
            producto_sinopsis,
            producto_disponible,
            producto_numResenas,
            producto_notaMedia,
            producto_plataforma} = req.body;

        const sql = `UPDATE product 
                        SET producto_nombre = '${producto_nombre}',
                        producto_sinopsis = '${producto_sinopsis}',
                        producto_disponible = ${producto_disponible},
                        producto_numResenas = ${producto_numResenas}',
                        producto_notaMedia = ${producto_notaMedia},
                        producto_plataforma = '${producto_plataforma}'
                        WHERE id_producto=${id_producto}`;

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            }else{
                conn.query(sql, (err)=>{
                
                    return callback(err,{'Resultado': 'Producto actualizado con éxito'});
            
                })
            }
            
        }); 
    },

    sumarNumeroReview: (req,id_producto,callback) => {
        
        this.productoPorId(req,(err,producto)=>{
            if(err){
                return callback(err);
            }else{

                const sql = `UPDATE product
                                SET producto_numResenas = ${producto.producto_numResenas}+1
                                WHERE id_producto = ${id_producto}`;
        
                req.getConnection((err,conn)=>{
        
                    if(err) {
                        return callback(err);
                    } else {
                        conn.query(sql,(err)=>{
                            
                            return callback(err,{'Resultado': 'Transacción realizada con éxito'});
                            
                        });
                    }
        
                });
            }
        });

    }

}

module.exports = Producto;