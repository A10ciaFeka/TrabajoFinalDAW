const productController = {};

/** --- GET REQUESTS --- */
/**
 * all products
 * 
 * @param {*} req 
 * @param {*} res 
 */
productController.allProducts =(req,res) => {
    const sql = 'SELECT * FROM products ORDER BY date DESC';

    req.getConnection((err,conn)=>{
        try{
            conn.query(sql, (err, review)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(review);
                }
            });
        }catch(err){
            res.json({'error': "Couldn't connect to db"})
        }
    });
}


/**
 * products by name
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productController.productByName =(req,res) => {
    const prod_name = req.params.prod_name;
    const sql = 'SELECT * FROM products WHERE prod_name='+prod_name;

    req.getConnection((err,conn)=>{
        try{
            conn.query(sql, (err, review)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(review);
                }
            });
        }catch(err){
            res.json({'error': "Couldn't connect to db"})
        }
    });
}

/** --- POST REQUEST --- */
/**
 * Create a new product
 * 
 * @param {*} req 
 * @param {*} res 
 */
productController.createProduct = (req,res) => {
    const {product_name, product_synopsys, product_launchdate, product_released} = req.body;
    const sql = `INSERT INTO product VALUES ('','${product_name}','${product_synopsys}','${product_launchdate}','${product_released}')`;

    req.getConnection((err,conn) => {
        try{
            conn.query(sql, (err,review)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json('Producto añadido');
                }
            })
        }catch(err) {
            res.json({'error': "Couldn't connect to db"})
        }
    })
}


/** --- UPDATE REQUEST --- */
/**
 * Update a product
 * 
 * @param {*} req 
 * @param {*} res 
 */
 productController.updateProduct = (req,res) => {
    const {product_name, product_synopsys, product_launchdate, product_released} = req.body;
    const sql = `UPDATE product SET ('','${product_name}','${product_synopsys}','${product_launchdate}','${product_released}')`;

    req.getConnection((err,conn) => {
        try{
            conn.query(sql, (err,review)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json('Producto añadido');
                }
            })
        }catch(err) {
            res.json({'error': "Couldn't connect to db"})
        }
    })
}

