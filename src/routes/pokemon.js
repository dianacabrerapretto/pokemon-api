var express = require('express');
var router = express.Router();
var { validateCaptureBody, validatePokemonSpecie } = require('../middlewares/pokemon');
const { validateIfNotValidatorError, isAuthenticated } = require('../middlewares/general');
const {
    capture,
    getPokemonListForTrainer,
    getPokemonByNameForTrainer,
    release
} = require('../controllers/pokemon');

router.get('/', isAuthenticated, validateIfNotValidatorError, getPokemonListForTrainer);

router.post('/capture', isAuthenticated, ...validateCaptureBody, validatePokemonSpecie, validateIfNotValidatorError, capture);
router.get('/:name', isAuthenticated, getPokemonByNameForTrainer);
router.delete('/:name/release', isAuthenticated, release);
router.get('/:porkemonName/pokename', isAuthenticated,(req, res, next) => {
    res.status(200).send("El nombre del pokemon: " + req.params.porkemonName);
    return next();
})

module.exports = router;