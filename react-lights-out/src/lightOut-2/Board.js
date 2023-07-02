import React, {useState} from "react";
import "./Board.css";
import Game from "./Game";
import Status from "./Status";
import GameOver from "./GameOver";

/**
 * 
 * Board view
 */

const NROW = 6, NCOL = 6;
const arrLightClass = ["Board-table-light-on", "Board-table-light-off"];
let game = new Game(NROW,NCOL);
let clicks = 0;
let startTime = 0, endTime = 0;
let zindex_gameover = -1;
game.initGame();
const Board = ()=>{
   const [lights, setLights] = useState([...game.matLights]);

    // return
    return (<div className="Board">
        <h1 className="Board-title">Lights Out Game</h1>
        <button className="Board-start" onClick={()=>{
            game = null;
            game = new Game(NROW,NCOL);
            game.initGame();
            startTime = endTime;
            clicks = 0;
            zindex_gameover = -1;
            setLights((lights)=>[...game.matLights]);
        }}>Start Over</button>

        <table className="Board-table">
            <tbody>
                {lights.map((row,ix )=>{
                    let str = row.map((e, iy) => 
                    <td key={iy}>
                        <button  className={`Board-table-button ${arrLightClass[e]}`} onClick={()=>{
                            clicks++;
                            if(clicks === 1) // start to count game time
                                startTime = performance.now();
                            endTime = performance.now();
                            game.updateLights(ix, iy);
                            setLights((lights) => [...game.matLights]);
                            if(game.isGameOver()){
                                zindex_gameover = 10;
                                setLights((lights)=>[]);
                                // setTimeout(()=>{
                                //     alert("Congraduation! You WON!");
                                    
                                // }, 500);

                            }
                         }}>
                         </button>
                    </td>)
                    return <tr key={ix}>
                        {str}
                    </tr>
                })}
            </tbody>
        </table>
        <GameOver  zindex={zindex_gameover}/>
        <p className="Board-description">
        <i><b>Lights Out</b></i> is a logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit. Click on a cell to toggle that light, and also ones adjacent to it (above, below, left and right). The puzzle is won when when all of the lights are turned off.
        </p>
        <Status target={game.target} time={Math.floor((endTime-startTime)/1000)} clicks={clicks}/>
        </div>
    )   
}

export default Board;