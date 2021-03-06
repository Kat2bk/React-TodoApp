import React from "react";

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }

    handleChange = (event) => {
        this.setState({ task: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddItem(this.state.task);
        this.setState({ task: ""});
    }

    render() {
        return (
            <div className="form-div">
            <form onSubmit={this.handleSubmit}>
            <input type="text" name="errand" value={this.state.task} onChange={this.handleChange}/>
            <button type="submit">Add Errand</button>
            <div className="btn-div">
            <button className="btn-submit" type="submit" onClick={this.props.handleErase}>Erase Completed</button>
            </div>
            </form>
            </div>
        )
    }
}

export default TodoForm;

// set up default state in app, set up form, set up form state, 