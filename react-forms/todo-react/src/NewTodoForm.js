import React, {useState, useRef} from "react";
import "./NewTodoForm.css";


const NewTodoForm = ({addTask})=>{
    const [formData, setFormData] = useState("");
    const refNewTaskWarning = useRef();

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        if(formData==="")
        return;
        addTask(formData);
        setFormData("");
    }

    const handleChange = (evt)=>{
        const task = evt.target.value;
        refNewTaskWarning.current.style.opacity = (task===""? 1:0);
        setFormData(data=>task);
    };

    return(<form>
        <input className="newtask-input" placeholder="new task" value={formData}
        onChange={handleChange}/>
        <p className="edit-form-warning" 
                style={{opacity:0}} ref={refNewTaskWarning}>required</p>
        <button   type="submit" className="newtask-btn"
        onClick={handleSubmit} >Add</button>
    </form>);
};

export default NewTodoForm;