const passwordValidator = {};
const crypto = require('crypto');

passwordValidator.setPassword = (user_password)=>{ 
    user_password = String(user_password);
    return crypto.createHash('sha1').update(user_password).digest('hex');
 }

passwordValidator.comparePassword = (pwdEntered,user_password)=>{ 

    
    pwdEntered = String(pwdEntered);
    pwdEntered = crypto.createHash('sha1').update(pwdEntered).digest('hex');
    console.log('pass del usu: '+user_password);
    console.log('pass metida: '+pwdEntered);
    return pwdEntered == user_password;
}

module.exports = passwordValidator;