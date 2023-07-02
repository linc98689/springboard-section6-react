import React from "react";
import "./GameOver.css";

const GameOver = ({zindex})=>{
    return <div className="GameOver" style={{zIndex: zindex}}>
       <h1 className="GameOver-title"> YOU WON!</h1>
    </div>
}

export default GameOver;