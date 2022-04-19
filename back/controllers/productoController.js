const productoController = {};
const jsonDB = {'error': "No se ha podido conectar a la base de datos"};


/** --- GET REQUESTS --- */
/**
 * Obtener todos los productos.
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoController.listar =(req,res) => {
    const sql = 'SELECT * FROM producto ORDER BY date DESC';

    req.getConnection((err,conn) => {
        
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

/**
 * Obtener un producto por su id
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.productoById =(req,res) => {
    const id_producto = req.params.id_producto;
    const sql = 'SELECT * FROM producto WHERE id_producto='+id_producto;

    req.getConnection((err,conn)=>{
        
        if(err){
            res.json(...jsonDB,...err);
        }else{
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado[0]);
                }
            });
        }
        
    });
}

/**
 * Obtener un producto por su nombre
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.productoByNombre =(req,res) => {
    const nombre = req.params.nombre;
    const sql = 'SELECT * FROM producto WHERE nombre='+nombre;

    req.getConnection((err,conn)=>{
        
        if(err){
            res.json(...jsonDB,...err);
        }else{
            conn.query(sql, (err, resultado)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(resultado[0]);
                }
            });
        }
        
    });
}

/** --- POST REQUEST --- */
/**
 * Crear un nuevo producto.
 * 
 * @param {*} req 
 * @param {*} res 
 */
productoController.crearProducto = (req,res) => {
    const {nombre, sinopsis, fecha_lanzamiento, lanzado} = req.body;
    const sql = `INSERT INTO producto VALUES ('','${nombre}','${sinopsis}','${fecha_lanzamiento}','${lanzado}')`;

    req.getConnection((err,conn) => {
        
        if(err) {
            res.json(...jsonDB,...err);
        } else {

            conn.query(sql, (err,resultado)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'id_producto':resultado.insertId});
                }
            });
        }
        
    });
}


/** --- UPDATE REQUEST --- */
/**
 * Actualizar los datos de un producto.
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productoController.editarProducto = (req,res) => {
    const id_producto = req.params;
    const {nombre, sinopsis, fecha_lanzamiento, lanzado} = req.body;
    const sql = `UPDATE product SET ('${id_producto}','${nombre}','${sinopsis}','${fecha_lanzamiento}','${lanzado}')`;

    req.getConnection((err,conn) => {
        if(err) {
            res.json(...err,jsonDB);
        }else{
            conn.query(sql, (err)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'Resultado': 'Producto actualizado con éxito'});
                }
            })
        }
        
    });
}

