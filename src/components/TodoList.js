// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
    console.log("props from TodoList", props)

    return (
        <div>
        {props.errand.map(item => (
            <Todo key={item.id} item={item} />
        ))}
        </div>
    )
}

export default TodoList;