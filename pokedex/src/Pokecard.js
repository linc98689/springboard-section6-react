import React from "react";
import "./Pokecard.css";

const Pokecard = ({card})=>(
    <div className="Pokecard">
        <h3 className="Pokecard-header">{card.name}</h3>
        <img className="Pokecard-image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${card.id}.png`}  alt=""></img>

        <div className="Pokecard-content">
            <p>Type:{card.type}</p>
            <p>EXP:{card.base_experience}</p>
        </div>
    </div>
)
    

export default Pokecard;