const routes = require("express").Router();

routes.get("/", function(request, response) {
  response.json({ message: "usuario" });
});

routes.patch("/", function(request, response) {
  response.json({ message: "usuario actualizado" });
});

module.exports = routes;
