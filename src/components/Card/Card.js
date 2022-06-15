import React from "react";
import './Card.css';

function Card({iconName, title, btnName, desc}){
    return(
        <div className="card">
            <i className={iconName}></i>
            <h2>{title}</h2>
            <p>
               {desc}
            </p>
            <button>{btnName}</button>
        </div>
    )
}
export default Card;