const { response } = require("express")
const Usuario = require('../models/usuario');

const getUsers = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;


   const users =  await Usuario.find({_id: {$ne: req.uid}}).sort('-online').skip(desde).limit(20)



    res.json({
        ok: true,
        users: users,
     
    });
}

module.exports ={
    getUsers
}