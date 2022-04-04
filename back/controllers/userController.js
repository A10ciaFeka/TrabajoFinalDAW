const userController = {};


/**
 * List users
 * 
 * @param {*} req 
 * @param {*} res 
 */
userController.listar = (req,res)=>{ 
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM usuario', (err,  user)=>{
            if (err) {
                res.json(err);
            }
            res.json(user);
        });
    });
};




module.exports = userController;