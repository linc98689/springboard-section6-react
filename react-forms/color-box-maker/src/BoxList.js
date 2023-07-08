import React from 'react';
import {useState} from "react";
import {v4 as uuid} from "uuid";
import "./BoxList.css";
import Box from "./Box";

const INIT_BOXES = [
    {color: "black", width: "100", height: "100"},
    {color: "blue", width: "150", height: "100"},
    {color: "red", width: "200", height: "120"},
];
const COLORS = ["aqua", "black", "blue", "fuchsia", "gray", "green", "lime", "maroon", 
"navy", "olive", "purple", "red", "silver", "teal", "white", "yellow"];

const BoxList = ()=>{
    //states
    const [boxes, setBoxes] = useState(INIT_BOXES);
    const [formData, setFormData] = useState({color:"", width:"", height:""});

    // useEffect(()=>{
    //     console.log(formData);
    // }, [formData]);

    const handleChange = (evt)=>{
        const {id, value} = evt.target;
        setFormData(data =>{
            return {...data, [id]: value};
        })
    };

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        setBoxes(data => [...data, formData]);
        setFormData(data =>{
            return {color:"", width:"", height:""}});
    }

    const deleteBox = (idx)=>{
        setBoxes(data => data.toSpliced(idx, 1));
    };

    // return
    return (
        <div className="BoxList">
            <h1 className="BoxList-title">Color Box Maker</h1>
            <h2 className="BoxList-subtitle">Make A New Box</h2>
            <form className="BoxList-form">
                <div className="BoxList-form-element">
                    <label htmlFor='width' className="BoxList-form-label" >Width in PX:</label>
                    <input id="width" type="text" className="BoxList-input-text" value ={formData.width} onChange={handleChange}/>
                </div>
                <div className="BoxList-form-element" >
                    <label htmlFor='height' className="BoxList-form-label" >Height in PX:</label>
                    <input id="height" type="text" className="BoxList-input-text"  value={formData.height} onChange={handleChange}/>
                </div>
                <div className="BoxList-form-element">
                    <label htmlFor="color" className="BoxList-form-label" >COLOR: </label>
                    <select id="color" onChange={handleChange}>
                        <option value="">--- Please select a color---</option>
                        {COLORS.map(c => <option value={c} key={uuid()}>{c}</option>)}
                    </select>
                </div>
                <button type="submit" onClick={handleSubmit} className="BoxList-form-element BoxList-form-button">Add</button>
            </form>
            
            <h2 className="BoxList-subtitle">Boxes You Have Made</h2>
            <div className="BoxList-list">
                {boxes.map( ({color, width, height}, idx) => <Box color={color} width={width+"px"} height={height+"px"}
                 key={uuid()} deleteBox={deleteBox} id={idx}/> )}
            </div>
        </div>
    );
}

export default BoxList;