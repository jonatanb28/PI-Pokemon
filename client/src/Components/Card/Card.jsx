import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    top:5rem ;
    display:inline-block ;
    margin: 15px ;
    position: relative;
    width: 320px;
    height: 395px;
    background:#F7F7F7;
    border-radius: 15px;
    overflow:hidden ;
    box-shadow: 0px 20px 40px rgba(77, 73, 89, 0.62);
    

    &::before{
        content: '';
        position:absolute;
        top:-50%;
        width:100%;
        height:100%;
        background:#F7F7F7;
        transform:skewY(335deg) ;
        transition: 0.5s;
    }

    &:hover::before{
        top: -70%;
        transform: skewY(390deg) ;
    }

    &:hover{
        background: #A770EF;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #FDB99B, #CF8BF3, #A770EF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        box-shadow: 5px 4px 20px rgba(255, 255, 255, 0.822);
    }
    
`

const ImgBox = styled.div`
    position:relative ;
    width:100% ;
    display:flex ;
    justify-content:center;
    align-items: center;
    padding-top:20px ;
    z-index: 1;
`
const StyledImg = styled.img`
    max-width:90%;
    transition:0.8s;

    &:hover{
        top:0 ;
        max-width:65%;
    }
`
const ContentBox = styled.div`
    position:relative;
    padding:20px;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column ;
    z-index:1 ;
`

const StyledH2 = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=Delius&display=swap');
    font-family: 'Delius', cursive;
    font-size:18px;
    color:#444444 ;
    margin-bottom:47px;
    text-transform: uppercase;
    letter-spacing:1px ;
    text-shadow: 0 10px 25px rgba(5, 4, 8, 0.397);
`

const StyledP = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet');
    font-family: 'Delius', cursive;
    font-size:20px;
    color: #F7F7F7;
    top:0 ;
    letter-spacing:1px;
    line-height:12px ;
    margin-bottom: 18px;
`
const StyledLink = styled(Link)`
    text-decoration: none ;
`
// eslint-disable-next-line import/no-anonymous-default-export
export default function Card({img, name, type, id}){
    
    let key = 1;
    return(
        <StyledLink to={`/Home/${id}`}>
            <Container>
                
                <ImgBox>
                    <StyledImg src={img} alt="not found"/>
                </ImgBox> 
               
                
                
                <ContentBox>
                    <StyledH2>{name}</StyledH2> 
                        {type.map((type)=>(
                            <StyledP key= {++key}>{type}</StyledP>
                        ))}
                </ContentBox> 
                
                
            </Container>
        </StyledLink>
       
    )
}

