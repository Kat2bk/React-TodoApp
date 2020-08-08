import React from "react";

const Todo = (props) => {
    console.log("props from Todo", props)
    return (
        <div>
        {props.item.task}
        </div>
    )
}

export default Todo;