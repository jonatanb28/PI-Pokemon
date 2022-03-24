import React , {useState} from "react";
import styled from "styled-components";


export default function Pagination({page, setPage, pokemonsPerPage}){

    const StyledButtonsPag = styled.button`
        border-radius: 50% ;
        background-color: none;
        font-size:30px;
        margin: 30px;
        padding:10px ;
        border:none ;
        color: #595959 ;

        &:hover{
            background-color:none;
            color: #595959;
            box-shadow: 0 0 20px #AA76EE, 0 0 40px #AA76EE, 0 0 80px #AA76EE;
            transition: 0.5s;
            border: none;
            cursor: pointer
        }

    `

    const DivStylePag = styled.div`
        display:flex ;
        align-items:center ;
        position:relative ;
        bottom:-4rem ;
        left:57.5rem ;
        @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
        font-family: 'Poppins', sans-serif;
    `

    const InputPaginationPag = styled.input`
    background: none;
    border: none;
    border-radius: 10px;
    width: 17px;
    margin-right: 2px;
    margin-top: 2px;
    font-size: 15px;
    @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
    font-family: 'Poppins', sans-serif;
    `

    const [input, setInput] = useState(1)

    function nextPage(){
        setInput (input + 1)
        setPage (page + 1);
    }
    
    function previousPage(){
        setInput (input - 1)
        setPage (page - 1);
    }
    

    return(
       <DivStylePag>
            <StyledButtonsPag disabled={page === 1 || page < 1} onClick={previousPage}>⇠</StyledButtonsPag>
            <InputPaginationPag name='page' autoComplete="off" type="text" value={input}/>
            <p>de {pokemonsPerPage}</p>
            <StyledButtonsPag disabled={page === 4 || page > 4} onClick={nextPage}>⇢</StyledButtonsPag>
        </DivStylePag>
    )
}