/*

PAth: /api/mensajes

*/

const {Router} = require('express');
const {validarJWT} = require('../middlewares/validad-jwt');
const { getChat } = require('../controllers/messages');


const router = Router();

router.get('/:de', validarJWT, getChat );

module.exports = router;