const userValidator = {};

userValidator.callback = (data) => {
    return data==0;
}

userValidator.validateNickname = (conn, inputNickname, callback) => {
    const sql = `SELECT * FROM users WHERE nickname='${inputNickname}'`; 

    conn.query(sql,(err,user)=>{
        callback(user.length);
    });

}


module.exports = userValidator;