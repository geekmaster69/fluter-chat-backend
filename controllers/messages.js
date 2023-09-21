

const { response } = require('express');
const Mensaje = require('../models/mensaje');


const getChat = async (req, res = response) => {
    const myId = req.uid;
    const mensajesDe = req.params.de;

    const last30 = await Mensaje.find({
        $or: [{de: myId, para: mensajesDe}, {de: mensajesDe, para: myId}]

    })
    .sort({createdAt: 'desc'})
    .limit(30);

    res.json({
        ok: true,
        mensajes: last30
    });


}

module.exports = {
    getChat
}