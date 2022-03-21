/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
import axios from 'axios';

export function getAllPokemons(){
    return async function(dispatch){
        dispatch({type:'Loading'})
        let json = await axios('/pokemons')
        return dispatch({
            type: 'getPokemons',
            payload: json.data
        })
    }
}


export function getAllTypes(){
    return async function (dispatch){
        let json = await axios ('/types')
        return dispatch({
            type: 'getTypes',
            payload: json.data
        })
    }
};

export function getPokemonsByName(name){
    return async function(dispatch){
        dispatch({type: 'Loading'})
        let json = await axios ('/pokemons?name=' + name)
        return dispatch({
            type: 'getPokemonsByName',
            payload: json.data
        })
    }
}

export function getPokemonsById(id){
    return async function(dispatch){
        if(id === 'clear'){
            dispatch({type: 'getPokemonsById',
            payload: 'clear'})
        } else{
            dispatch({type: 'Loading'})
        let json = await axios ('/pokemons/' + id)
        return dispatch({
            type: 'getPokemonsById',
            payload: json.data
        })
    }
        }
        
}

export function filterByTypes(payload){
    return{
        type: 'filterByTypes',
        payload
    }
}

export function filterByOrigin(payload){
    return{
        type: 'filterByOrigin',
        payload
    }
}


export function orderByName(payload){
    return{
        type: 'orderByName',
        payload
    }
}

export function orderByAttack(payload){
    return{
        type: 'orderByAttack',
        payload
    }
}

export function postPokemon(payload){
    return async function(dispatch){
        const pokemon = await axios.post('/pokemons', payload)
        return dispatch({
            type: 'postPokemon',
            payload: pokemon
        })
    }
}


export function deletePokemon(id){
    return async function(dispatch){
        await axios.delete('/pokemons/' + id)
        return dispatch({
            type: 'deletePokemon',
        })
    }

}