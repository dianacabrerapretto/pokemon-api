const { writeFileForGetPokemon } = require('../services/file');
const { writeFileForPostPokemon } = require('../services/file');
const { writeFileForPutPokemon } = require('../services/file');
const { writeFileForDeletePokemon } = require('../services/file');


const writeFileGet = async (req, res, next) => {
    const retunedMessage = await writeFileForGetPokemon(req.query.pokemonName);
    if (retunedMessage !== "") {
        res.status(200).send(retunedMessage);
        return next();
    } else {
        res.status(500).send("Se rompio");
        return next();
    }

}

const writeFilePost = async (req, res, next) => {
    const returnedMessage = await writeFileForPostPokemon(req.query.pokemonName);
    if (returnedMessage !== "") {
        res.status(200).send(returnedMessage);
        return next();
    } else {
        res.status(500).send("Se rompio");
        return next();
    }
}

const writeFilePut = async (req, res, next) => {
    const retunedMessage = await writeFileForPutPokemon(req.query.pokemonName);
    if (retunedMessage !== "") {
        res.status(200).send(retunedMessage);
        return next();
    } else {
        res.status(500).send("Se rompio");
        return next();
    }
}

const writeFileDelete = async (req, res, next) => {
    const retunedMessage = await writeFileForDeletePokemon(req.params.pokemonName);
    if (retunedMessage !== "") {
        res.status(200).send(retunedMessage);
        return next();
    } else {
        res.status(500).send("Se rompio");
        return next();
    }
}

module.exports = { writeFileGet, writeFilePost, writeFilePut, writeFileDelete }