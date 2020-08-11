import React from "react";

const Todo = ({errand, handleToggle}) => {
    return (
        <div className={`errand ${errand.completed ? " completed" : ""}`} onClick={() => handleToggle(errand.id)}>
        {errand.task}
        </div>
    )
}

export default Todo;