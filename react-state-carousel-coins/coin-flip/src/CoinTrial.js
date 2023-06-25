import React, {useState} from 'react';
import './CoinTrial.css';
import Coin from "./Coin";

const MAX_NUM_FLIPS = 10;

/**
 * 
 * @returns 0 or 1 randomly
 */
const makeFlip = ()=> Math.floor(Math.random() * 2);

/**
 * state: currSide, numHeads, numTails
 */
const CoinTrial = ()=>{
    const [currSide, setCurrSide] = useState(0);
    const [numHeads, setNumHeads] = useState(0);
    const [numTails, setNumTails] = useState(0);
    
    const handleBtnClick = (evt)=>{
        let side = makeFlip();
        setCurrSide(side);
        if (numHeads + numTails === MAX_NUM_FLIPS-1)
            setTimeout(()=>{
                setNumHeads(0);
                setNumTails(0);
            }, 1000);

        if (side === 0)
            setNumHeads(numHeads + 1);
        else 
            setNumTails(numTails + 1);
    };

    if((numHeads + numTails) ===0){
        return ( // no coin shown
            <>
                <button className="CoinTrail-btn" onClick={handleBtnClick}>FLIP MEEEE</button>
                <p data-testid="summary" className="CoinTrail-summary">
                    Out of {numHeads + numTails} flips, there have been {numHeads} heads and {numTails} tails.
                </p>
            </>
        );
    }
    else {
        return ( // coin shown
            <>
                <Coin side={currSide} />
                <button className="CoinTrail-btn" onClick={handleBtnClick}>FLIP MEEEE</button>
                <p data-testid="summary" className="CoinTrail-summary">
                    Out of {numHeads + numTails} flips, there have been {numHeads} heads and {numTails} tails.
                </p>
            </>
        );
    }
};

export default CoinTrial;