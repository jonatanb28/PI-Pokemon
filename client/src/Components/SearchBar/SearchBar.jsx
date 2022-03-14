import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../Actions";
import './SearchBar.css';

export default function SearchBar(){


    const dispatch = useDispatch();
    const [state, setState] = useState('');

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
        <form className="form_searchBar" onSubmit={event => handleSubmit(event)}>
            <input className="input_searchBar" type="text" placeholder="Exact name" onChange={handleChange} />
            <button className="button_searchBar" type='submit'>Search</button>
        </form>
    )
}