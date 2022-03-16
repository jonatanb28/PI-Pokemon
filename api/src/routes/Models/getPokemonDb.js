const {Pokemon, Type} = require('../../db');

const getDbPokemonInfo = async()=>{
    const dbPokemons = await Pokemon.findAll({
        include: {
            model: Type,
            as: 'type',
            atributes: ['name'], 
            through: {
                atributes: []
            }
        }
    })
    const pokeJson = dbPokemons.map(pokemon => pokemon.toJSON());
    const pokeType = pokeJson.map(pokemon=>{
       const typeName = pokemon.type.map(type=> type.name)
       return {...pokemon, type: typeName}
    })


    return pokeType;
}

module.exports = getDbPokemonInfo;