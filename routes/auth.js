
/*
path: api/login

*/

const { Router} = require('express');
const { check } = require('express-validator');
const { crearusuario, login, renewToken } = require('../controllers/auth');
const { validadCampos } = require('../middlewares/validad-campos');
const { validarJWT } = require('../middlewares/validad-jwt');

const router = Router();


router.post('/new',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'Se require un password').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    
    validadCampos

] ,crearusuario);



router.post('/', [
    check('password', 'Se require un password').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    validadCampos

], login);


// validadJWT
router.get('/renew', validarJWT, renewToken );




module.exports = router;