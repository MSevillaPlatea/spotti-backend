const axios = require("axios");

const endpoints = {
  playlist: "http://localhost:4000/playlists/"
};

function getPlaylists() {
  return axios.get(endpoints.playlist);

  //lo de abajo es lo mismo que la linea de arriba pero debugueado

  /* axios
  .get("http://localhost:3000/playlists")
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  }); */
}

function getPlaylist(id) {
  return axios.get(endpoints.playlist + id);
}

function newPlaylist(name) {
  return axios.post(endpoints.playlist, { name });
}
function deletePlaylist(id) {
  return axios.delete(endpoints.playlist + id);
}

function remanePlaylist(id, name) {
  return axios.patch(endpoints.playlist + id, { name });
}

function likePlaylist(id) {
  return axios.post(endpoints.playlist + id + "/likes");
}
function likePlaylist(id) {
  return axios.delete(endpoints.playlist + id + "/likes");
}

//obtiene todas las listas // con get
getPlaylists().then(response => console.log(response.data));

//crea una nueva lista // con post
//newPlaylist("playlist_prueba").then(response => console.log(response.data));

//renombra una lista // con update
//remanePlaylist(1, "primera_lista").then(Response => console.log(Response.data));

//elimina playlist // con delete

deletePlaylist(1).then(Response => console.log(Response.data));
