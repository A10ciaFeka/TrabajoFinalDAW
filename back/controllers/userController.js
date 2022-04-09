const userController = {};
const passwordValidator = require('../validator/passwordValidator');

/**
 * List users
 * 
 * @param {*} req 
 * @param {*} res 
 */ 
userController.listUsers = (req,res) => { 
    const sql = 'SELECT * FROM user';

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
 * GET USER BY ID
 * 
 * @param {*} req 
 * @param {*} res 
 */
userController.getUserById = (req,res) => {
    const id_user = req.params.id_user;
    const sql = "SELECT * FROM user WHERE id_usuario="+id_user;

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

userController.createUser = (req, res) => {

    const {user_nickname,user_password,user_email} = req.body;
    const hashedPwd = passwordValidator.setPassword(user_password);
    const sql = `INSERT INTO user VALUES('','${user_nickname}','${hashedPwd}','${user_email}', '0')`;

    req.getConnection((err,conn) => {
        try{
            conn.query(sql, (err,user)=>{
                if(err) {
                    res.json(err);
                } else {
                    res.json({'succeed': true, 'id_user': user.insertId});
                }
            })
        }catch(err) {
            res.json({'error': "Couldn't connect to db"})
        }
    });
}

module.exports = userController;