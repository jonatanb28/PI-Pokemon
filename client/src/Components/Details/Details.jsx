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
                <div className="container">
                    <div className="details_container">
                        <div className="header">
                            <img className="img" src={pokemon[0].img} alt='img'></img>
                            <h2 className="title">Hi! I´m {pokemon[0].name}</h2>
                        </div>

                        <div className="description">
                            <h2 className="title"><span>Type: </span>{pokemon[0].type.map((type)=>(<p className="p_details">{type}</p>))}</h2>
                            <h3 className="title"><span>Hp: </span>{pokemon[0].hp}</h3>
                            <h3 className="title"><span>Attack: </span>{pokemon[0].attack}</h3>
                            <h3 className="title"><span>Defense: </span>{pokemon[0].defense}</h3>
                            <h3 className="title"><span>Speed: </span>{pokemon[0].speed}</h3>
                            <h3 className="title"><span>Weight: </span>{pokemon[0].weight}</h3> 
                            <h3 className="title"><span>Height: </span>{pokemon[0].height}</h3>
                            <Link to='/Home'><button className="my_button">Back to Home</button></Link>
                        </div>
                    </div>
                </div>
                :  (<LoadingPage/>) 
            }
        </div>
    )

  
}