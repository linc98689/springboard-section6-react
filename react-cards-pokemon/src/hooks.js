import  {useState} from "react";
import axios from 'axios';
import {v1 as uuid} from "uuid";
import SyntheticBaseEvent from "react";

const useFlip = (initSide = true)=>{ //true-face, false-back
    const [side, setSide] = useState(initSide);
    const flip = ()=>{
        setSide(side =>!side);
    };
    return [side, flip];
};

const useAxios = (baseUrl)=>{
    const [cards, setCards] = useState([]);
    const addCard = async (name)=>{
        let ext = typeof(name )=== "string"? name+"/": "";
        const response = await axios.get(`${baseUrl}${ext}`);
        setCards(cards => [...cards, { ...response.data, id: uuid()}]);
    };
    return [cards, addCard];
};

export {useFlip, useAxios}