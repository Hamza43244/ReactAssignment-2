import React from "react";

const ToDoLists = (props) =>{


    return (
        <>
        <div className="todo_style">
    <li> {props.text} </li>
    <button onClick={()=>{
        props.onSelect(props.id)
    }}>Delete</button>
    <button onClick={()=>{
       props.onSelect(props.id) 
    }}>Edit</button>
    </div>
    </>  
    );
}

export default ToDoLists;