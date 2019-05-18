let playlistRoutes = require("./endpoints/playlists");
let profileRoutes = require("./endpoints/profile");
let albumsRoutes = require("./endpoints/albums");
let usersRoutes = require("./endpoints/users");
const express = require("express");
let cors = require("cors");
const app = express();

var bodyParser = require("body-parser");

//middleware (atrapa la solicitu y le aplica una funcion antes de seguir)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", function(request, response) {
  response.end("");
});

app.use("/playlists", playlistRoutes);
app.use("/users", usersRoutes);
app.use("/albums", albumsRoutes);
app.use("/me", profileRoutes);

app.listen(4000, () => {
  console.log("aplicacino inicializada en puerto 4000");
});
