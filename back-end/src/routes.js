const express = require("express");

const CurriculoController = require("./Curriculo/index");
const jwt = require("../auth/index");

const routes = express.Router();

//const verifyJWT = require("../auth/index");

routes.post("/criar", jwt.verifyJWT, CurriculoController.create);

routes.get("/lista",  CurriculoController.index);
routes.get("/",  CurriculoController.t);

routes.post("/listaum", CurriculoController.indexUm);

//routes.post("/login", UsuarioController.login);

/*routes.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
});*/

//routes.delete("/product/:id", ProductController.delete);

//routes.put("/product/:id", ProductController.update);

//routes.get("/list", ListController.index);

module.exports = routes;
