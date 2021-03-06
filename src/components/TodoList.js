// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    console.log("props from TodoList", props)

    return (
        <div className="list">
        {props.errand.map(item => (
            <Todo key={item.id} errand={item}  handleToggle={props.handleToggle}/>
        ))}
        </div>
    )
}

export default TodoList;
