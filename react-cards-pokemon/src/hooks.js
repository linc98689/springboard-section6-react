import  {useState} from "react";
import axios from 'axios';
import {v1 as uuid} from "uuid";

const useFlip = (initSide = true)=>{ //true-face, false-back
    const [side, setSide] = useState(initSide);
    const flip = ()=>{
        setSide(side =>!side);
    };
    return [side, flip];
};

const useLocalStorage = (key, initValue) => {
    const [cards, setCards] = useState(
        ()=>{ 
            let value = window.localStorage.getItem(key);
            if (value === null)
                return initValue;
            else
                return JSON.parse(value)});

    const setAndStoreCards = (data)=>{
        window.localStorage.setItem(key, JSON.stringify(data));
        setCards((oldData)=>data);
    }

    return [cards, setAndStoreCards];
}

const useAxios = (baseUrl, funcFormat, cardsType)=>{ //playingCard or pokemonCard
    const [cards, setCards] = useLocalStorage(cardsType, []);
    const addCard = async (name)=>{
        if (name === "clearAll"){
            setCards([]);
        } else{
            let ext = typeof(name )=== "string"? name+"/": "";
            const response = await axios.get(`${baseUrl}${ext}`);
            let data = funcFormat(response.data);
            setCards( [...cards, { ...data, id: uuid()}]);
        }
    };
    return [cards, addCard];
};

export {useFlip, useAxios}