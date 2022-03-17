/* eslint-disable array-callback-return */

const initialState = {
    loading: false,
    allPokemons: [],
    copyPokemons: [],
    types: [],
    details: [],
    pokeDetails: [],
}

function reducer (state = initialState, {type, payload}) {
    // eslint-disable-next-line default-case
    switch(type){
        case 'getPokemons':
            return{...state, allPokemons: payload, copyPokemons: payload, loading: false}
        case 'getTypes':
            return{...state, types: payload}
        case 'getPokemonsByName':
            return{...state, copyPokemons: payload, loading: false}
        case 'getPokemonsById':
            if(payload === 'clear'){
                return {...state, details: []}
            }   return{...state, details: payload, loading: false}
        case 'filterByTypes':
            const allTypes = state.allPokemons
            const typesFilter = payload === 'all' ? allTypes : allTypes.filter(pokemon => {
                for(let type of pokemon.type){
                    if(payload === type){
                        return pokemon
                    } 
                }
            });
            return{...state, copyPokemons: typesFilter}
        case 'filterByOrigin':
            const allPokemonsArray = state.allPokemons;
            const filterOrigin = payload === 'createdInDb' ? allPokemonsArray.filter(pokemon => pokemon.createdInDb) : allPokemonsArray.filter(pokemon=> !pokemon.createdInDb)
            return {...state, copyPokemons: payload === 'All' ? allPokemonsArray : filterOrigin}
        case 'orderByName':
            let orderArray = payload === "ascendent" ? state.copyPokemons.sort(function(a,b){
                if(a.name > b.name) return 1;
                if(b.name > a.name) return -1;
                return 0; 
            }) :
            state.copyPokemons.sort(function(a,b){
                if(a.name > b.name) return -1;
                if(b.name > a.name) return 1;
                return 0;
            });
            return {...state, copyPokemons: orderArray}
        case 'orderByAttack':
            let orderAttackArray = state.copyPokemons;
            payload === 'ascendent' ? state.copyPokemons.sort(function(a,b){
                if(a.attack > b.attack) return 1;
                if(b.attack > a.attack) return -1;
                return 0;
            }) :
            state.copyPokemons.sort(function(a,b){
                if(a.attack > b.attack) return -1;
                if(b.attack > a.attack) return 1;
                return 0;
            });
            return {...state, copyPokemons: orderAttackArray}
        case 'postPokemon':
            return{...state}
        case 'deletePokemon':
            return{...state}
        case 'Loading':{
            return {...state, loading: true}
        }
        default: return state
    }
};

export default reducer;

