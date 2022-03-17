/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width:100vw;
    height:45px ;
    background: #332b24a0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #383631ca, #3b322a94);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #42413dd6, #383533); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display:flex ;
    align-items:center ;
    justify-content:space-around;
    top:0 ;
    position:fixed ;
    z-index:2 ;
    margin: 0px ;
    box-shadow: 0 5px 30px rgba(128, 95, 185, 1);
`

const Select = styled.select`
    border: none ;
    padding:3px 15px ;
    border-radius:10px ;
    background: #332b24a0;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #383631ca, #3b322a94);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #42413dd6, #383533); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color: #dadada;
    margin-right:20px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;

    &:hover{
        cursor: pointer;
        color: white;
        background-color: #43314D;
        box-shadow: 0 0 20px #AA76EE, 0 0 40px #AA76EE, 0 0 80px #AA76EE;
        transition:0.8s;
    }
`

const Options = styled.option`
    background-color:#413A44;
    color:#dadada;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
`

const StyledButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif; 
    border-radius:10px ;
    background-color:#F7F7F7 ;
    border:none ;
    padding:4px 6px;
    color:#474747 ;
    letter-spacing: 2px;

    &:hover{
            color: white;
            background-color: #474747;
            box-shadow: 0 0 20px #F7F7F7, 0 0 40px #F7F7F7, 0 0 80px #F7F7F7;
            transition:0.8s;
            border: none;
            cursor:pointer ;
            padding: 5px 12px ;
        }

`
const Par = styled.label`
    color: white;
    display:inline;
    margin-right:10px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
`


export default function({allTypes, handleSort, handleOrderByAttack, handleOrigin, handleFilterByType, handleClick}){
    return(

        <nav>
            <Container>

                <div>
                    <SearchBar/>
                </div>
            
                <div>
                    <Par>Order by: </Par>
                    <Select onChange={event => handleSort(event)}>  
                        <Options value="ascendent">Aa to Zz</Options> 
                        <Options value="descendent">Zz to Aa</Options> 
                    </Select>

                    
                    <Select defaultValue ='attack' onChange={event => handleOrderByAttack(event)}>
                        <option value="attack" disabled>Attack</option>
                        <Options value="ascendent">Low Attack</Options> 
                        <Options value="descendent">Top Attack</Options> 
                    </Select>
                </div>
                
                <div>
                    <Par>Filter by: </Par>
                    <Select defaultValue ='Origin' onChange={event => handleOrigin(event)}>
                        <Options value="All">Created In</Options>    
                        <Options value="api">Api</Options> 
                        <Options value="createdInDb">Data Base</Options> 
                    </Select>
                

                    <Select  defaultValue ='Types' onChange={event => handleFilterByType(event)}>   
                        <option value="Types" disabled>Types</option>
                        <Options value="all">All Types</Options>
                            {allTypes && allTypes.map((t) => (
                            <Options value={t.name} key={t.name}>{t.name}</Options>))}
                    </Select>
                </div>

                <div>
                    <Link to='/CreatePokemon'><StyledButton>Create Pokemon</StyledButton></Link>
                </div>
           
            </Container>
        </nav>
        
    )
}