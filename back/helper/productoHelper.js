const productoHelper = {};

productoHelper.recalcularPuntuacion = (add,conn, review_estrellas, review_total, id_producto, callback)=>{

    let puntuacionNuevaProducto = 0;

    console.log(id_producto);
    const sqlMediaProd = `SELECT review_estrellas FROM review WHERE id_producto=${id_producto}`;
    conn.query(sqlMediaProd,(err,resultado)=>{
        if(err) return callback(err);

        let notasSumadas = 0;
        resultado.forEach(review => {
            for (const key in review) {
                notasSumadas += review[key];
            }
        });

        if(add){
            puntuacionNuevaProducto = (notasSumadas+review_estrellas)/(review_total+1);
        }else{
            puntuacionNuevaProducto = (review_total-1)==0 ? 0 : (notasSumadas-review_estrellas)/(review_total-1);
        }

        const sqlCambiarNotaPod = `UPDATE producto SET producto_puntuacionMedia=${puntuacionNuevaProducto} WHERE id_producto=${id_producto}`;
        
        conn.query(sqlCambiarNotaPod,(err)=>{
            if(err) return callback(err);
        });        
    }); 
}
module.exports = productoHelper;
