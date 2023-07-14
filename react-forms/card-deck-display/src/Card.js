import React from "react";
import "./Card.css";

const Card = ({src, id})=>{
    let angle = id * 25;
    return (
        <div className="Card"  >
            <img className="Card-img" src={`${src}`} alt="card"
            style={{transform:`rotate(${angle}deg)`}}/>
        </div>
    );
};

export default Card;