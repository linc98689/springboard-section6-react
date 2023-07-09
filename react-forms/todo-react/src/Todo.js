import React from "react";
import "./Todo.css"

const Todo = ({id,task,isdone, removeTask, 
    updateTaskStatus, updateCurrentTaskIdx})=>{
    
    const handleRemove = (evt)=>{
        const idStr = evt.target.id;
        const id = idStr.slice(idStr.indexOf("-")+1);
        removeTask(Number(id));
    };

    const handleDone = (evt) =>{
        const idStr = evt.target.id;
        const id = idStr.slice(idStr.indexOf("-")+1);
        updateTaskStatus(id);
    };

    const handleEdit = (evt) =>{
        const idStr = evt.target.id;
        const id = idStr.slice(idStr.indexOf("-")+1);
        updateCurrentTaskIdx(id);
    };

    // return
    return(
        <li className="todo">
            <span className={isdone==="true"? "todo-done": ""}>{task}</span>
            <div className="todo-buttons">
                <button className="todo-btn" id={`edit-${id}`}
                onClick={handleEdit}>Edit</button>
                <button className="todo-btn" id={`complete-${id}`} 
                isdone={`${isdone}`}
                onClick={handleDone}>Mark as Completed</button>
                <button className="todo-btn" id={`remove-${id}`}
                onClick={handleRemove}>Remove</button>
            </div>
        </li>
    );
}

export default Todo;