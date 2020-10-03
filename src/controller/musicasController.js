const musicas = require('../model/musicas.json');
//const artistas = require('../model/artistas.json')

const getAll = (req, res) => {
    console.log(req.url)
    res.status(200).send(musicas);
}

const getByID = (req,res) => {
    const id = req.params.id
    
    const musicaFiltrada = musicas.find((musica) => musica.id == id )
    res.status(200).send(musicaFiltrada)    
}

const getByArtist = (req, res) => {
    const artista = req.params.artista
    const artistaFiltrado = musicas.filter((musica) => musicas.artista == artista)

    res.status(200).send(artistaFiltrado);
}

const getAllArtists = (req, res) => {
    const artista = musicas.map((musica) => musica.artista)

    res.status(200).send(artista)
}

module.exports = { getAll, getByID, getAllArtists, getByArtist }