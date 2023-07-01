import React, {useState} from "react";
import "./Board.css";
import Game from "./Game";

/**
 * 
 * Board view
 */

const NROW = 6, NCOL = 6;
let game = new Game(NROW,NCOL);
game.initGame();
const Board = ()=>{
   const [lights, setLights] = useState([...game.matLights]);

    // return
    return (<div className="Board">
        <button onClick={()=>{
            game = null;
            game = new Game(NROW,NCOL);
            game.initGame();
            setLights((lights)=>[...game.matLights]);
        }}>Start Over</button>

        <table className="Board-table">
            <tbody>
                {lights.map((row,ix )=>{
                    let str = row.map((e, iy) => 
                    <td key={iy}>
                        <button onClick={()=>{
                            game.updateLights(ix, iy);
                            setLights((lights) => [...game.matLights]);
                            if(game.isGameOver()){
                                setLights((lights)=>[]);
                                setTimeout(()=>{
                                    alert("Congraduation! You WON!");
                                    
                                }, 500);
                            }
                         }}>{e}
                         </button>
                    </td>)
                    return <tr key={ix}>
                        {str}
                    </tr>
                })}
            </tbody>
        </table>
        </div>
    )   
}

export default Board;