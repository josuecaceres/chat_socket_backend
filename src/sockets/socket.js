const { io } = require("../../index");
const { comprobarJWT } = require("../helpers/jwt");
const { usuarioConectado, usuarioDeconectado } = require("../controllers/sockect");

// Mensajes de Sockets
io.on("connection", (client) => {
  console.log("Cliente conectado");

  const [valido, uid] = comprobarJWT(client.handshake.headers["x-token"]);
  if (!valido) {
    return client.disconnect();
  }

  usuarioConectado(uid)
  
  client.on("disconnect", () => {
    console.log("Cliente desconectado");
    usuarioDeconectado(uid)
  });

  // client.on('mensaje', ( payload ) => {
  //     console.log('Mensaje', payload);
  //     io.emit( 'mensaje', { admin: 'Nuevo mensaje' } );
  // });
});
