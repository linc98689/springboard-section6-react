import React, {useState, useEffect, useRef} from "react";
import "./Deck.css";
import Card from "./Card";
import axios from "axios";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/?count=52";
const MAX_COUNT = 52;
const Deck = ()=>{
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(-1);
    const refLoadingMsg = useRef();
    const refDrawBtn = useRef();
    const refShuffleBtn = useRef();

    useEffect(() => {
        fetchDeck()} ,[]);

    const fetchDeck = async ()=>{
        showLoading();
        const res = await axios.get(BASE_URL);
        console.log(res.data);
        hideLoading();
        setCards(data=>res.data.cards);
        setCount((data)=> -1);
    }    

    const handleDrawCard = (evt)=>{
        // console.log(cards[count]);
        if(count === MAX_COUNT-2)
            evt.target.disabled = true;
        setCount(count => count+1);
    };

    const handleShuffle = (evt)=>{
        fetchDeck();
    };

    const showLoading = ()=>{
        refLoadingMsg.current.style.opacity = 1;
        refDrawBtn.current.disabled = true;
        refShuffleBtn.current.disabled = true;
    };

    const hideLoading = ()=>{
        refLoadingMsg.current.style.opacity = 0;
        refDrawBtn.current.disabled = false;
        refShuffleBtn.current.disabled = false;
    };

   

    // return
    return (
        <div className="Deck">
            <p className="Deck-loading" ref={refLoadingMsg}>loading...</p>
            <button ref={refDrawBtn} className="Deck-btn" onClick={handleDrawCard}>Draw a Card</button>
            <button ref={refShuffleBtn} className="Deck-btn" onClick={handleShuffle}>Shuffle Deck</button>
            {count === MAX_COUNT-1 && <p className="Deck-msg">
                <b>Alert:</b> No more cards in the deck. Please Shuffle Deck </p>}

            {count !== -1 && cards.slice(0, count+1).map((e, i)=> 
            <Card key={`${i}`} src={`${e.images.png}`} id={i}/> )} 
            
        </div>
    );
}

export default Deck;

