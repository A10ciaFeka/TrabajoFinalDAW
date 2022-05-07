
const Producto = {

    listarProductos: (req, callback) => {
        let sql = `SELECT id_producto, producto_nombre, producto_sinopsis, producto_fechaSalida, producto_disponible, producto_numResenas, producto_puntuacionMedia, producto_plataforma, producto_etiqueta
                        FROM producto
                        ORDER BY producto_fechaSalida DESC`;
        
        const  sqlCount = `SELECT count(*) AS total FROM producto`
        if(req.params.num_productos){
            if(req.params.offset){
                sql+=` LIMIT ${req.params.offset},${req.params.num_productos}`;                
            }else{
                sql+=` LIMIT ${req.params.num_productos}`;
            }
        }
        
        req.getConnection((err,conn) => {
            
            if(err) {
                return callback(err);
            }else {
                conn.query(sql, (err, resultado)=>{
                    if(err) return callback(err)
                    conn.query(sqlCount, (err, resultCount) => {
                        if(err) return callback(err)
                        return callback(err,{
                            resultados: resultado,
                            total: resultCount.pop().total
                        });
                    })
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
                    return callback(err,resultado[0].producto_imagen);

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
                    return callback(err,resultado.pop());

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
        
        const id_producto = req.params.id_producto;

        const {
            producto_nombre,
            producto_sinopsis,
            producto_disponible,
            producto_fechaSalida,
            producto_numResenas,
            producto_notaMedia,
            producto_plataforma} = req.body;

        const sql = `UPDATE producto 
                        SET producto_nombre = '${producto_nombre}',
                            producto_sinopsis = '${producto_sinopsis}',
                            producto_disponible = ${producto_disponible},
                            producto_fechaSalida = '${producto_fechaSalida}',
                            producto_numResenas = ${producto_numResenas},
                            producto_puntuacionMedia = ${producto_notaMedia},
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
        

        const sql = 'SELECT id_producto, producto_nombre, producto_sinopsis, producto_fechaSalida, producto_disponible, producto_numResenas, producto_puntuacionMedia, producto_plataforma, producto_etiqueta FROM producto WHERE id_producto='+id_producto;

        req.getConnection((err,conn)=>{
            
            if(err){
                return callback(err);
            }else{
                conn.query(sql,(err,producto)=>{

                    const sql = `UPDATE product
                    SET producto_numResenas = ${producto[0].producto_numResenas}+1
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
                });

            }
            
        });

    }

}

module.exports = Producto;