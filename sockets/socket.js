const { usuarioConnectado, usuarioDesconectado, saveMessage } = require('../controllers/socket');
const { comprobarJWT } = require('../helpers/jwt');
const { io } = require('../index');

// Mensajes de Sockets
io.on('connection', (client) => {

    console.log('Cliente Conectado!!!');

    const [valido, uid] = comprobarJWT(client.handshake.headers['x-token']);

    if (!valido) { return client.disconnect(); }

    //Cliente autenticado
    usuarioConnectado(uid);

    // Ingresar al usuario a una sala en particular
    // Sla global, cliend.id
    client.join(uid);

    //Ecuchar del cliente el evento mensaje-personal
    client.on('mensaje-personal', async (payload) =>{

        //Grabar mensaje
        await saveMessage(payload);
    

       

        io.to(payload.para).emit('mensaje-personal', payload);

    })

    



    client.on('disconnect', () => {
       // console.log('Cliente Desconectado!!!')
        usuarioDesconectado(uid)
    });
});