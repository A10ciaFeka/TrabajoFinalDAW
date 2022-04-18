const userController = {};
const passwordValidator = require('../validator/passwordValidator');
const userValidator = require('../validator/userValidator');

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

/**
 * Get user by it's username
 * 
 * @param {*} req 
 * @param {*} res 
 */
userController.getUserByNickname = (req,res) => {
    const nickname = req.params.nickname;
    const sql = "SELECT * FROM users WHERE nickname="+"'"+nickname+"'";

    req.getConnection((err,conn)=>{
        try{
            conn.query(sql,(err,user)=>{
                if(err) {
                    res.json(err);
                }else{
                    res.json(user);
                }
            });
            
        }catch(err){
            res.json({'error': "Couldn't connect to db"});
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
userController.createUser = async(req, res) => {

    const {user_nickname,user_password,user_email} = req.body;
    const hashedPwd = passwordValidator.setPassword(user_password);
    const sql = `INSERT INTO users VALUES('','${user_nickname}','${hashedPwd}','${user_email}', '0', '')`;
    
    req.getConnection((err,conn) => {
        try{
            let resNick = userValidator.validateNickname(conn,user_nickname);
            if(resNick){
                conn.query(sql, (err,user)=>{
                    if(err) {
                        res.json(err);
                    } else {
                        res.json({'id_user': user.insertId});
                    }
                })
            }else{
                res.json({'error': "Nickname already exits"});
            }
        }catch(err) {
            res.json({'error': "Couldn't connect to db"})
        }
    });
}


// EXPORTING THE MODULE
module.exports = userController;