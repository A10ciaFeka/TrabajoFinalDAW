const reviewController = {};
const jsonDB = {'error': "No se ha podido conectar a la base de datos"};

/** --- GET REQUESTS --- */
/**
 * Obtener las reviews de un usuario
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
reviewController.reviewByUsuario = (req,res) => { 
    const id_usuario = req.params.id_usuario;
    const sql = 'SELECT * FROM review WHERE id_usuario='+id_usuario+' ORDER BY review_fecha DESC';

    req.getConnection((err,conn)=>{
        if(err) {
            res.json(...jsonDB,...err);
        }else {
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado);
                }
            });
        }
    });
};


/**
 * Obtener la review de un producto específico y de un usuario específico
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
 reviewController.reviewByUsuarioAndProducto = (req,res) => { 
    const id_usuario = req.params.id_usuario;
    const id_producto = req.params.id_producto;
    const sql = 'SELECT * FROM review WHERE id_usuario='+id_usuario+'AND id_producto='+id_producto;

    req.getConnection((err,conn)=>{
        if(err) {
            res.json(...jsonDB,...err);
        }else {
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado);
                }
            });
        }
    });
};

/**
 * Obtener las últimas reviews según número a indicar por el cuerpo de la petición.
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.getUltimasReviews = (req,res) => {
    const sql = "SELECT * FROM review ORDER BY review_fecha DESC LIMIT "+req.body.numReviews;

    req.getConnection((err,conn)=>{
        if(err) {
            res.json(...jsonDB,...err);
        }else {
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado);
                }
            });
        }
    });
}


/** --- POST REQUESTS --- */
/**
 * Crear una nueva review
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.createReview = (req, res) => {
    const id_producto = req.params;
    const {review_estrellas,review_nombre,review_texto,id_usuario} = req.body;
    let review_fecha = new Date();
    const sql = `INSERT INTO review VALUES('','${review_estrellas}','${review_nombre}','${review_texto}','0','${id_producto}','${id_usuario}','${review_fecha}')`;

    req.getConnection((err,conn) => {
        if(err) {
            res.json(...jsonDB,...err);
        } else {

            conn.query(sql, (err,resultado)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'id_review':resultado.insertId});
                }});
        }
    });
}


// /** --- PUT REQUESTS --- */
// /**
//  * Actualizar los datos de una review.
//  * 
//  * @param {*} req 
//  * @param {*} res 
//  */
//  reviewController.editarReview = (req,res) => {
//     const id_review = req.params;
//     const {nickname, password, email, verificado} = req.body;
//     const hashedPwd = passwordValidator.setPassword(password);
//     const sql = `UPDATE usuario SET ('${id_usuario}','${nickname}','${hashedPwd}','${email}', '${verificado}', '')`;

//     req.getConnection((err,conn) => {
//         if(err) {
//             res.json(...jsonDB,...err);
//         }else{
//             conn.query(sql, (err)=>{
//                 if(err) {
//                     res.json(err);
//                 } else {
//                     res.json({'Resultado': 'Usuario actualizado con éxito'});
//                 }
//             })
//         }
        
//     });
// }

module.exports = reviewController;