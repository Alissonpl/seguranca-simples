const express = require("express");

const CurriculoController = require("./Curriculo/index");
const jwt = require("../auth/index");

const routes = express.Router();


routes.post("/criar", jwt.verifyJWT, CurriculoController.create);

routes.get("/lista", jwt.verifyJWT, CurriculoController.index);

routes.get("/",  CurriculoController.t);

routes.post("/listaum", jwt.verifyJWT, CurriculoController.indexUm);



module.exports = routes;
