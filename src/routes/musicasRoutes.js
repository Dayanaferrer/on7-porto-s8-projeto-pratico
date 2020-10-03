
const express = require('express');
const route = express.Router();
const controller = require('../controller/musicasController');

route.get('/musicas',controller.getAll);
route.get('/musica/:id', controller.getByID);
route.get('/artistas', controller.getAllArtists);
route.get('/musicas/artista/:artista', controller.getByArtist);
//route.get ('/artistas', controller.getAllArtists);

module.exports= route