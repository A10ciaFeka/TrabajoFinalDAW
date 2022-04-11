const reviewController = {};

/** --- GET REQUESTS --- */
/**
 * Review by user
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
reviewController.reviewByUser = (req,res) => { 
    const id_user = req.params.id_user;
    const sql = 'SELECT * FROM review WHERE id_user='+id_user+' ORDER BY date DESC';

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
};


/**
 * Review by user and product
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
 reviewController.reviewByUserAndProduct = (req,res) => { 
    const id_user = req.params.id_user;
    const id_product = req.params.id_product;
    const sql = 'SELECT * FROM review WHERE id_user='+id_user+'AND id_product='+id_product;

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
};

/**
 * Get the latests reviews 
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.getReviewByDate = (req,res) => {
    const sql = "SELECT * FROM review ORDER BY date DESC LIMIT "+req.params.reviewNum;

    req.getConnection((err,conn)=>{
        try{
            conn.query(sql, (err,review)=>{
                if(err){
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


/** --- POST REQUESTS --- */
/**
 * Create a new review
 * 
 * @param {*} req 
 * @param {*} res 
 */
reviewController.createReview = (req, res) => {

    const {review_stars,review_name,review_body} = req.body;
    let review_date = new Date();
    const sql = `INSERT INTO review VALUES('','${review_stars}','${review_name}','${review_body}','${review_date}' '0')`;

    req.getConnection((err,conn) => {
        try{
            conn.query(sql, (err,review)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'id_review': review.insertId});
                }
            })
        }catch(err) {
            res.json({'error': "Couldn't connect to db"})
        }
    });
}


module.exports = reviewController;