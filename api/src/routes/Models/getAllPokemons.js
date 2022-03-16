const getApiPokemons = require('./getApiPokemons');
const getDbPokemonInfo = require('./getPokemonDb');

const getAllPokemons = async()=>{
    const [apiPokemonInfo, dbPokemonsInfo] = await Promise.all([getApiPokemons(), getDbPokemonInfo()]); 

    const allPokemonsInfo = apiPokemonInfo.concat(dbPokemonsInfo);
    return allPokemonsInfo;
}

module.exports = {getAllPokemons}