import React from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./components/Todo.css";

const errands = [
  {
    id: 361,
    task: "Clean kitchen",
    completed: false
  }
]

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      errands: errands
    }
  }

  handleAddItem = () => {
    const newItem = {
      id: Date.now(),
      task: "",
      completed: false
    }
    this.setState({ errands: [...this.state.errands, newItem]})
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem}/>
        <TodoList errand={this.state.errands}/>
      </div>
    );
  }
}

export default App;
