/* eslint-disable react-hooks/exhaustive-deps */

import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonsById } from "../../Actions";
import { Link } from "react-router-dom";
import LoadingPage from '../LoadingPage/LoadingPage.jsx'
import './Details.css'


export default function Details(){
    console.log()
    const {id} = useParams();
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.details);
    
    useEffect(()=>{
        dispatch(getPokemonsById(id))
        return(function cleanUp(){
            dispatch(getPokemonsById('clear'))
        }) 
    },[dispatch]);

    return(
        <div>
            { pokemon.length > 0 ? 
                <div className="body">
                    <h1 className="title">Hi! I´m {pokemon[0].name}</h1>
                    <img className="img" src={pokemon[0].img} alt='img'></img>
                    <div >
                        <h2>Type: {pokemon[0].type.map((type)=>(<h3>{type}</h3>))}</h2>
                    </div>
                    <div>
                        <h3>Hp: {pokemon[0].hp}</h3>
                        <h3>Attack: {pokemon[0].attack}</h3>
                        <h3>Defense: {pokemon[0].defense}</h3>
                        <h3>Speed: {pokemon[0].speed}</h3>
                    </div>
                    <div>
                        <h3>Weight: {pokemon[0].weight}</h3>
                        <h3>Height: {pokemon[0].height}</h3>
                    </div>
                   
                    <Link to='/Home'><button>Back to Home</button></Link>
                </div>
                :  (<LoadingPage/>) 
            }
        </div>
    )

  
}