const express = require("express");
const path = require("path");
require("dotenv").config();

// App de Express
const app = express();

// Lectura y parseo del Body
app.use(express.json());

// Node Server
const server = require("http").createServer(app);
module.exports.io = require("socket.io")(server);
require("./src/sockets/socket");

// Path público
const publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

// Mis Rutas
app.use("/api/login", require("./src/routes/auth"));
app.use("/api/usuarios", require("./src/routes/usuarios"));

app.set('port', process.env.PORT || 3000)

// DB Config
require("./src/database/config").dbConnection();

server.listen(app.get('port'), (err) => {
  if (err) throw new Error(err);

  console.log("Servidor corriendo en puerto", app.get('port'));
});
