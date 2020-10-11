const express = require("express");
const morgan = require("morgan");

const server = express();

server.set("port", process.env.PORT || 3000);

server.use(morgan('dev'));
server.use(express.json());
server.use(express.urlencoded({extended: false}));

server.use("/api/empleados",require("./routes/employs"));


module.exports = server;
