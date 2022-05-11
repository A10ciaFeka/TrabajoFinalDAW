const moment = require('moment');
const productoHelper = require('../helper/productoHelper');

const Review = {

    reviewPorUsuario: (req, callback) => {

        const sql = 'SELECT * FROM review WHERE id_usuario='+req.params.id_usuario+' ORDER BY review_fecha DESC';

        req.getConnection((err,conn)=>{
            if(err) {
                return callback(err);
            }else {
                conn.query(sql, (err, resultado)=>{
                    return callback(err, resultado);
                });
            }
        });

    },

    reviewPorProducto: (req, callback) => {

        let sql = `SELECT rev.*, usu.usuario_apodo, usu.usuario_fotoPerfil FROM review rev
                    INNER JOIN usuario usu ON usu.id_usuario = rev.id_usuario 
                    WHERE rev.id_producto=${req.params.id_producto}
                    ORDER BY rev.review_fecha DESC`;

        const sqlCount = `SELECT count(*) AS total FROM review WHERE id_producto=${req.params.id_producto}`;

        if(req.params.num_reviews){
            if(req.params.offset){
                sql+=` LIMIT ${req.params.offset},${req.params.num_reviews}`; 
            }else{
                sql+=` LIMIT ${req.params.num_reviews}`;
            }
        }


        req.getConnection((err,conn)=>{
            if(err) {
                return callback(err);
            }else {

                conn.query(sql, (err, resultado)=>{
                    if(err) return callback(err)
                    conn.query(sqlCount, (err,resultCount)=>{
                        if(err) return callback(err);
                        
                        return callback(err,{
                            resultados: resultado,
                            total: resultCount.pop().total
                        })
                    });
                });
            }
        });

    },

    reviewPorUsuarioYProducto: (req, callback) => {
        
        const id_usuario = req.params.id_usuario;
        const id_producto = req.params.id_producto;
        const sql = 'SELECT * FROM review WHERE id_usuario='+id_usuario+' AND id_producto='+id_producto;

        req.getConnection((err,conn)=>{
            if(err) {
                return callback(err);
            }else {
                conn.query(sql, (err, resultado)=>{
                    return callback(err, resultado);
                });
            }
        });

    },

    getUltimasReviews: (req, callback) => {
        
        const sql = "SELECT * FROM review ORDER BY review_fecha DESC LIMIT "+req.body.review_numReviews;

        req.getConnection((err,conn)=>{
            if(err) {
                return callback(err);
            }else {
                conn.query(sql, (err, resultado)=>{
                    return callback(err, resultado);
                });
            }
        });

    },

    crearReview: (req, callback) => {
        
        const { review_estrellas,
                review_nombre,
                review_texto,
                review_total,
                id_producto,
                id_usuario } = req.body;
               
        let fecha = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
        
        const sql = `INSERT INTO review VALUES(
                        '',
                        ${review_estrellas},
                        '${review_nombre}',
                        '${review_texto}',
                        '0', 
                        '${id_producto}',
                        '${id_usuario}',
                        '${fecha}')`;
        console.log(req.body);
        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            } else {
                // Calculamos la nueva media para el producto
                                  
                productoHelper.recalcularPuntuacion(true,conn,review_estrellas,review_total,id_producto,(err)=>{
                    if (err) return callback(err);
                })
                
                conn.query(sql, (err,resultado)=>{
                    return callback(err,resultado);
                });
    
            }
        });

    },
    
    editarReview: (req, callback) => {
         
        const { review_estrellas,
                review_nombre,
                review_texto,
                review_likes,
                id_review} = req.body;
            
        const sql = `UPDATE review
                        SET review_estrellas = ${review_estrellas}
                        review_nombre='${review_nombre}'
                        review_texto='${review_texto}'
                        review_likes=${review_likes}
                        WHERE id_review=${id_review}`;
        
        req.getConnection((err,conn)=>{

            if(err){
                return callback(err);
            }else{

                conn.query(sql, (err)=>{
                    return callback(err,{'Resultado': 'Review actualizada con éxito'});
                });

            }

        });
    },

    eliminarReview: (req,callback) => {
        const {review_estrellas,
                review_total,
                id_producto,
                id_review} = req.body;

        const sql = `DELETE FROM review WHERE id_review=${id_review}`;
        
        req.getConnection((err,conn)=>{
            if(err) return callback(err);

            productoHelper.recalcularPuntuacion(false,conn,review_estrellas,review_total,id_producto,(err)=>{
                if(err) return callback(err);
            });

            conn.query(sql,(err,resultado)=>{
                return callback(err,{'Resultado': 'Review borrada'});
            });
        });
    },

    
}

module.exports = Review;