import React from "react";
import './NotFoundPage.css'
import gif from './img/gif.gif'


export default function NotFoundPage(){
    return(
        <div className="div_notFound">
            <h1 className="title_h1">We're sorry! What you are looking for has not been found. Try typing the exact name</h1>
            <img className="gif" src={gif} alt="pika" />
        </div>
    )
}