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

module.exports = app;
