var express = require('express');
var router = express.Router();
const { isAuthenticated } = require('../middlewares/general');
const { writeFileGet } = require('../controllers/file');
const { writeFilePost } = require('../controllers/file');
const { writeFilePut } = require('../controllers/file');
const {writeFileDelete} = require('../controllers/file');
const fs = require('fs');

router.get('/writeFileGet', isAuthenticated, writeFileGet);
router.post('/writeFilePost', isAuthenticated, writeFilePost);
router.put('/:pokemonName/writeFilePut', isAuthenticated, writeFilePut);
router.delete('/writeFileDelete', isAuthenticated, writeFileDelete);

module.exports = router;