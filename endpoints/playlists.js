//el id request params id es como ejemplo
//las rutas dimamicas van abajo
//codigos de estado
//200 ok
//201 created (post, put, patch)
//403 forbiden
// 405 metodo no permitido
// 422 no cumple las reglas de validacion

const routes = require("express").Router();
const model = require("./../models/PlaylistModel");

routes.get("/", function(request, response) {
  model.findAll().then(data => {
    response.json(data);
  });
});

routes.get("/:id", function(request, response) {
  model.findByPk(request.params.id).then(data => response.json(data));

  //response.json({ id: request.params.id });
});

routes.post("/:id/liked", function(request, response) {
  response.json({
    // playlists: request.params.id,
    message: "playlists" + " " + request.params.id + " " + "megustada"
  });
});

routes.delete("/:id/liked", function(request, response) {
  response.json({
    message: "Ya no me gusta " + request.params.id + " playlists"
  });
  //si lo pones antes toma antes el comando status que el mensaje
  response.status(201).end();
});

routes.post("/", function(request, response) {
  model.create({ name: request.body.name, user_id: 2 }).then(data => {
    response.json(data);
  });
});

routes.patch("/:id", function(request, response) {
  //actualiza un registro con un condicional
  model
    .update({ name: request.body.name }, { where: { id: request.params.id } })
    .then(data => {
      response.json(data);
    });
});

routes.delete("/:id", function(request, response) {
  model
    .update({ deleted_at: new Date() }, { where: { id: request.params.id } })
    .then(data => {
      response.json(data);
    });
  //en caso que delete no este permitido
  //response.status(403).end();
  //response.json({ message: "accion no permitida" });
  response.json({ message: "elemento eliminado", id: request.params.id });
});

module.exports = routes;
