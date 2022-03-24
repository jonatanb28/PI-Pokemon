import React from "react";
import './Loading.css'
import Loading from './img/Loading.gif'


export default function LoadingPage(){
    return(
        <div className="loading_container">
            <img className="img_loading" src={Loading} alt="gif" />
        </div>
    );
}