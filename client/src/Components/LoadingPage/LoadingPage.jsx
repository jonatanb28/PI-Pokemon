import React from "react";
import styled from "styled-components";
import Loading from './img/Loading.gif'


const Container = styled.div`
        @import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
        font-family: 'Delius', cursive;;
        height: 100vh;
        width: 100%;
    `;
const Img = styled.img`
    width: 675px;
    height: 200px;
    position: relative;
    top: 25rem;
`


export default function LoadingPage(){
    return(
        <Container>
            <Img src={Loading} alt="gif" />
        </Container>
    );
}