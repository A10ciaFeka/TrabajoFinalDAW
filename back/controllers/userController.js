const userController = {};
const passwordValidator = require('../validator/passwordValidator');


/** --- GET REQUESTS --- */
/**
 * List users
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
userController.listUsers = (req,res) => { 
    const sql = 'SELECT * FROM users';

    req.getConnection((err,conn)=>{
        try{
            conn.query(sql, (err, user)=>{
                if (err) {
                    res.json(err);
                }else{
                    res.json(user);
                }
            });
        }catch(err){
            res.json({'error': "Couldn't connect to db"})
        }
    });
};

/**
 * Get user by id
 * 
 * @param {*} req 
 * @param {*} res 
 */
userController.getUserById = (req,res) => {
    const id_user = req.params.id_user;
    const sql = "SELECT * FROM users WHERE id_user="+id_user;

    req.getConnection((err,conn)=>{
        try{
            conn.query(sql,(err, user)=>{
                if(err){
                    res.json(err);
                }else{
                    res.json(user)[0];
                }
            });

        }catch(err){
            res.json({'error': "Couldn't connect to db"})
        }
    });
}


/** --- POST USER --- */
/**
 * CREATE AN USER
 * 
 * @param {*} req 
 * @param {*} res 
 */
userController.createUser = (req, res) => {

    const {user_nickname,user_password,user_email} = req.body;
    const hashedPwd = passwordValidator.setPassword(user_password);
    const sql = `INSERT INTO users VALUES('','${user_nickname}','${hashedPwd}','${user_email}', '0')`;

    req.getConnection((err,conn) => {
        try{
            conn.query(sql, (err,user)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'id_user': user.insertId});
                }
            })
        }catch(err) {
            res.json({'error': "Couldn't connect to db"})
        }
    });
}


// EXPORTING THE MODULE
module.exports = userController;