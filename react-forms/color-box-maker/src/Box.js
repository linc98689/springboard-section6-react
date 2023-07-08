import React from "react";
import "./Box.css";

const Box = ({id,color, width, height, deleteBox})=>{
    const handleDelete = (evt) =>{
        deleteBox(evt.target.id);
    };

    //return
    return (
        <div className="Box">
            <div className="Box-box" style={{backgroundColor:color, width, height}}></div>
            <button  id={id} className="Box-delete" onClick={handleDelete}>X</button>
        </div>
    );
}

export default Box;