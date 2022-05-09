const { log } = require('console');
var fs = require('fs');

const Producto = {

    listarProductos: (req, callback) => {
        let sql = `SELECT * FROM producto ORDER BY producto_fechaSalida DESC`;
        
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


    productoPorId: (req, callback) => {
        const sql = 'SELECT * FROM producto WHERE id_producto='+req.params.id_producto;

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
        const sql = `SELECT * FROM producto WHERE producto_nombre='${req.params.producto_nombre}'`;

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
            producto_plataforma,
            producto_imagen,
            producto_etiqueta} = req.body;

        const sql = `INSERT INTO producto VALUES (
                        '',
                        '${producto_nombre}',
                        '${producto_sinopsis}',
                        '${producto_fechaSalida}',
                        ${producto_disponible},
                        '0.0',
                        '${producto_plataforma}',
                        '${producto_imagen}',
                        '${producto_etiqueta}')`;

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
            producto_puntuacionMedia,
            producto_imagen,
            producto_plataforma} = req.body;

        const sql = `UPDATE producto 
                        SET producto_nombre = '${producto_nombre}',
                            producto_sinopsis = '${producto_sinopsis}',
                            producto_disponible = ${producto_disponible},
                            producto_fechaSalida = '${producto_fechaSalida}',
                            producto_puntuacionMedia = ${producto_puntuacionMedia},
                            producto_imagen = '${producto_imagen}',
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
        

        const sql = 'SELECT * FROM producto WHERE id_producto='+id_producto;

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