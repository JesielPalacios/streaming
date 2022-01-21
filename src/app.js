const express = require("express");
const app = express();

// creamos un servidor http a partir de la librería de express
const http = require("http").Server(app);

// para generar una comunicación vamos a trabajar con socket.io
const io = require("socket.io")(http);

// routes
app.use(require("./routes/littleZoom.routes"));

// donde vamos a cargar los html con lo que vamos a trabajar.
app.use(express.static(__dirname + "/public"));

// generar un evento que perita una coneción multicanal
io.on("connection", (socket) => {
  socket.on("stream", (myImage) => {
    // emitir el evento a todos los socket conectados
    // mediante una función emisora
    socket.broadcast.emit("stream", myImage);
  });
});

module.exports = app;
