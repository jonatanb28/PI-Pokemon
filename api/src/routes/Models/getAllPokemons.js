const getApiPokemons = require('./getApiPokemons');
const getDbPokemonInfo = require('./getPokemonDb');

const getAllPokemons = async()=>{
    // const apiPokemonInfo = await getApiPokemons();
    // const dbPokemonsInfo = await getDbPokemonInfo();
    const [apiPokemonInfo, dbPokemonsInfo] = await Promise.all([getApiPokemons(), getDbPokemonInfo()]); //si no la ejecuto no me va a retornar nada

    const allPokemonsInfo = apiPokemonInfo.concat(dbPokemonsInfo);
    return allPokemonsInfo;
}

module.exports = {getAllPokemons}