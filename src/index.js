const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(require('./routes'))

app.listen(4000, ()=>{console.log("Serivdor funcionando en el puerto 4000")})