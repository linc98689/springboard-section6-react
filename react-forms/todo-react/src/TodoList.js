import React, {useState, useEffect} from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import EditForm from "./EditForm";

let stored = localStorage.getItem("todo-list");
let initList = stored ===null? []: JSON.parse(stored);
const TodoList = ()=>{
    const [tasks, setTasks] = useState(initList);
    const [currentTaskIdx, setCurrentTaskIdx] = useState(-1); //not editing
    useEffect(()=>{
        localStorage.setItem("todo-list", JSON.stringify(tasks));
    }, [tasks])

    const addTask = (task)=>{
        setTasks((data) =>[{task, isdone:false}, ...data]);
    };

    const removeTask = (idx)=>{
        setTasks((data) => data.toSpliced(idx, 1))
    }

    const updateTaskStatus = (idx)=>{
        let todo = tasks[idx];
        todo.isdone = !todo.isdone;
        setTasks(data => data.toSpliced(idx, 1, todo));
    }

    const updateTask = (task)=>{
        const todo = tasks[currentTaskIdx];
        todo.task = task;
        setTasks(data => data.toSpliced(currentTaskIdx, 1, todo));
    }

    const updateCurrentTaskIdx = (idx)=>{
        setCurrentTaskIdx(data => idx);
    }

    //return
    return (
        <div className="todolist">
            <h1 className="todolist-title">My Todo List</h1>
            <h2 className="todolist-subtitle">Add a new task</h2>
            <NewTodoForm addTask={addTask}/>

            <h2 className="todolist-subtitle"> Tasks on hand</h2>
            <ul className="todolist-list">
                {tasks.map((e, i)=> {
                    return (<Todo id={i} task={e.task} isdone={`${e.isdone}`} 
                        key={i}
                        removeTask={removeTask}
                        updateTaskStatus={updateTaskStatus} 
                        updateCurrentTaskIdx={updateCurrentTaskIdx}/>)
                })}
            </ul>

            <EditForm  updateTask={updateTask}
             updateCurrentTaskIdx={updateCurrentTaskIdx}
             task={currentTaskIdx === -1? "": tasks[currentTaskIdx].task}
            className_2={currentTaskIdx === -1?
             "edit-form-unshown" : "edit-form-shown"}/>
        </div>
    );
}

export default TodoList