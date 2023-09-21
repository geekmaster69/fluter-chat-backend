const Usuario = require('../models/usuario');
const Mensaje = require('../models/mensaje');


const usuarioConnectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = true;
    await usuario.save();
    return usuario;
}

const usuarioDesconectado = async (uid = '') => {
    const usuario = await Usuario.findById(uid);
    usuario.online = false;
    await usuario.save();
    return usuario;
}

const saveMessage = async(payload) =>{
    /*
    {
        de: '',
        para: '',
        texto: ''
    }
    */
   console.log(payload);
    try {
        const mensaje = new Mensaje(payload);
        await mensaje.save();
     
        return true;
    } catch (error) {
        return false;
    }
} 


module.exports = {
    usuarioConnectado,
    usuarioDesconectado,
    saveMessage
}