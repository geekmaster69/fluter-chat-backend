const jwt = require('jsonwebtoken');

const generarJWT = (uid)=>{

    return new Promise((resolve, reject) =>{

        const payload = { uid };

        jwt.sign(payload, process.env.JWT_KEY, {
            expiresIn: '24h'
        }, (err, token) =>{
    
            if(err){
                //NO se pudo crear eltoken
                reject('No se pudo generar el JWT');
            }else{
                resolve(token);
            }

        })
    });

}

const comprobarJWT = (token = '') =>{
    try {

        const {uid} = jwt.verify(token, process.env.JWT_KEY);
        return [true, uid];

        
        next();
    } catch (error) {
        return [false];
        
    }

}


module.exports = {
    generarJWT,
    comprobarJWT
}