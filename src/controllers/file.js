const {writeFileForGetPokemon} = require('../services/file')

const writeFileGet = async(req,res,next) => {
        const retunedMessage = await writeFileForGetPokemon(req.query.pokemonName);
        if(retunedMessage !== ""){
            res.status(200).send(retunedMessage);
            return next(); 
        }else{
            res.status(500).send("Se rompio");
            return next(); 
        }
        
}

module.exports = {
    writeFileGet
}