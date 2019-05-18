const routes = require("express").Router();
const model = require("./../models/UserModel");

routes.get("/", function(request, response) {
  model
    .findAll({
      attributes: ["id", "email", "first_name", "nickname"]
    })
    .then(data => {
      response.json(data);
    });
});

routes.patch("/", function(request, response) {
  //crea un registro
  //routes.post("/", function(request, response)
  // model.create(request.body);

  //actualiza un registro con un condicional
  model.update(request.body, {
    where: { id: 1 }
  });

  //termina la conexion
  response.json({});
});

module.exports = routes;
