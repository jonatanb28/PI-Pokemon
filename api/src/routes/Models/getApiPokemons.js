const axios = require('axios');

const getApiPokemons = async()=>{
    const firstApiPage = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const secondApiPage = await axios.get(firstApiPage.data.next); 

    const allPokemons = firstApiPage.data.results.concat(secondApiPage.data.results);

    const PokemonProps = await Promise.all(
        allPokemons.map(async ele=>{
            const pokemon = await axios.get(ele.url);
            return{
                id: pokemon.data.id,
                img: pokemon.data.sprites.other.home.front_default,
                name: pokemon.data.name,
                hp: pokemon.data.stats[0].base_stat,
                attack: pokemon.data.stats[1].base_stat,
                defense: pokemon.data.stats[2].base_stat,
                speed: pokemon.data.stats[5].base_stat,
                height: pokemon.data.height,
                weight: pokemon.data.weight,
                type: pokemon.data.types && pokemon.data.types.map(ele=> ele.type.name)
               
            }
        }) 
    ) 
    return PokemonProps;
}
module.exports = getApiPokemons;

