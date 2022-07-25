const{writeFile} = require('../providers/file')

const writeFileForGetPokemon = async (name) => {
    const message = 'Intento obtener el pokemon:' + name
    try{
        await writeFile('./log', message);
        return message;
    }catch(err){
        return""
    }
}

module.exports = {writeFileForGetPokemon}