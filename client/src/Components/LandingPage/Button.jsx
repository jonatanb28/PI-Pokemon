import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


function Button(){

    const MyButtonLand = styled.div`
    margin-left: 40px;
        position: relative;
        display: inline-block;
        padding: 10px 20px;
        color: #d1a044;
        text-transform: uppercase;
        letter-spacing: 4px;
        text-decoration: none;
        font-size: 24px;
        overflow: hidden;
        transition: 0.2s;
        border-radius: 20px;
        border: none;
        left: 70px;

        &:hover{
            color: #313131;
            background-color: none;
            box-shadow: 0 0 20px #AA76EE, 0 0 40px #AA76EE, 0 0 80px #AA76EE;
            transition: 1.2s;
            border: none;
        }

    `;

    const StyledLinkLand = styled(Link)`
        text-decoration:none;
        color: #dadada ;

        &:hover{
            color:white ;
        }
    `

    return(
        
        
        <MyButtonLand>
            <StyledLinkLand to='/Home'>Start</StyledLinkLand>
        </MyButtonLand>
        
    )  
       
};

export default Button;