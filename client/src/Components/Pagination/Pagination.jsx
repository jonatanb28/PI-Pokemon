
import styled from "styled-components";


export default function Pagination({page, setPage}){

    const StyledButtons = styled.button`
        border-radius: 20px ;
        background-color: #595959; ;
        margin: 20px;
        padding:10px ;
        border:none ;
        color:white ;

        &:hover{
            background-color:#F7F7F7;
            color: #595959;
            box-shadow: 0 0 20px #AA76EE, 0 0 40px #AA76EE, 0 0 80px #AA76EE;
            transition: 0.5s;
            border: none;
            cursor: pointer
        }

    `

    const DivStyle = styled.div`
        display:flex ;
        align-items:center ;
        position:relative ;
        bottom:-4rem ;
        left:60rem ;
    `

    function nextPage(){
        setPage (page + 1);
    }
    
    function previousPage(){
        setPage (page - 1);
    }

    return(
       <DivStyle>
            <StyledButtons disabled={page === 1 || page < 1} onClick={previousPage}>izquierda</StyledButtons>
            <StyledButtons disabled={page === 4 || page > 4} onClick={nextPage}>derecha</StyledButtons>
        </DivStyle>
    )
}