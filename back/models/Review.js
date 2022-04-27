
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

    reviewPorUsuarioYProducto: (req, callback) => {
        
        const id_usuario = req.params.id_usuario;
        const id_producto = req.params.id_producto;
        const sql = 'SELECT * FROM review WHERE id_usuario='+id_usuario+'AND id_producto='+id_producto;

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
        
        const id_producto = req.params;
        
        const { review_estrellas,
                review_nombre,
                review_texto,
                id_usuario } = req.body;
               

        const sql = `INSERT INTO review VALUES(
                        '',
                        '${review_estrellas}',
                        '${review_nombre}',
                        '${review_texto}',
                        '0', 
                        '${id_producto}',
                        '${id_usuario}',
                        '${new Date()}')`;

        req.getConnection((err,conn) => {
            if(err) {
                return callback(err);
            } else {

                conn.query(sql, (err,resultado)=>{
                    
                    return callback(err,{'id_review':resultado.insertId, 'id_producto': id_producto});
                });
            }
        });

    },
    
    editarReview: (req, callback) => {
         
        const id_review = req.params.id_review;

        const { review_estrellas,
                review_nombre,
                review_texto,
                review_likes} = req.body;
            
        const sql = `UPDATE review
                        SET review_estrellas = ${review_estrellas}
                        review_nombre='${review_nombre}'
                        review_texto='${review_texto}'
                        review_likes=${review_likes}`;
        
        req.getConnection((err,conn)=>{

            if(err){
                return callback(err);
            }else{

                conn.query(sql, (err)=>{
                    return callback(err,{'Resultado': 'Review actualizada con éxito'});
                });

            }

        });
    }
}

module.exports = Review;