import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../Actions";
import styled from "styled-components";

export default function SearchBar(){


    const dispatch = useDispatch();
    const [state, setState] = useState('');
    console.log(state)

    function handleChange(event){
        event.preventDefault()
        setState(event.target.value)
        if(event.target.value === ''){
            dispatch(getPokemonsByName(''))
        }
    };

    function handleSubmit(event){
        event.preventDefault();
        dispatch(getPokemonsByName(state))
    }

    return(
        <form onSubmit={event => handleSubmit(event)}>
            <input type="text" placeholder="Exact name" onChange={handleChange} />
            <button type='submit'>Search</button>
        </form>
    )
}