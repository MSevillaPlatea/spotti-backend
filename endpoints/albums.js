const routes = require("express").Router();

routes.get("/", function(request, response) {
  response.json([
    {
      playlista: "primera",
      playlistb: "segunda",
      playlistc: "primera",
      playlistd: "primera",
      playliste: "primera"
    }
  ]);
});

routes.get("/:id", function(request, response) {
  response.json({ album: request.params.id });
});

module.exports = routes;
