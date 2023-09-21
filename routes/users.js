/*
path: api/users

*/
const { Router} = require('express');
const { validarJWT } = require('../middlewares/validad-jwt');
const { getUsers } = require('../controllers/users');

const router = Router();


// validadJWT
router.get('/', validarJWT, getUsers );




module.exports = router;