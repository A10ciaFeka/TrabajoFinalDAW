const passwordValidator = {};
const bcrypt = require('bcrypt');

passwordValidator.setPassword = async(user_password)=>{
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(user_password,salt);
}

passwordValidator.comparePassword = async(pwdEntered,user_password)=>{
    return bcrypt.compareSync(pwdEntered,user_password);
}

module.exports = passwordValidator;