import React, {useState, useRef, useEffect} from "react";
import "./EditForm.css";

const EditForm = ({task, updateTask, updateCurrentTaskIdx, className_2}) =>{
    const [formData, setFormData] = useState("");
    useEffect(()=>{
        setFormData(task);
        refInput.current.focus();
    }, [task]);

    const refInput = useRef();
    const refTaskWarning = useRef();
    const handleChange = (evt) =>{
        const task = evt.target.value;
        refTaskWarning.current.style.opacity = (task===""? 1:0);
        setFormData(data => task);
    };

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        if(formData==="")
            return;
        const tk= formData;
        updateTask(tk);
        updateCurrentTaskIdx(-1);
    }

    const handleCancel = (evt)=>{
        updateCurrentTaskIdx(-1);
    };

    return (
        <div className={`edit-form ${className_2}`}>
            <h2 className="edit-form-title"> Editing a task</h2>
            <form>
                <input className="edit-input" id="edit-task" type="text" value={formData}
                onChange={handleChange} ref={refInput} autoFocus/> 
                <p className="newform-warning" 
                style={{opacity:0}} ref={refTaskWarning}>required</p>
                <div className="edit-buttons">
                    <button type="button" onClick={handleCancel}>Cancel</button>
                    <button type="submit" onClick={handleSubmit}>Save</button>
                </div>
            </form>
        </div>
        );
    }

export default EditForm;