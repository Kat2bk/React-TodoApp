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
      errands: JSON.parse(localStorage.getItem('task')) || errands
    }
  }

  handleAddItem = (task) => {
    const newItem = {
      id: Date.now(),
      task: task,
      completed: false
    }
    this.setState({ errands: [...this.state.errands, newItem]}, () => {
      localStorage.setItem('task', JSON.stringify(this.state.errands));
    })
  }

  handleClearToggle = (id) => {
    this.setState({
      errands: this.state.errands.map(tasks => {
        if (id === tasks.id) {
          return {
            ...tasks,
            completed: !tasks.completed
          }
        }
        return tasks
      })
    })
  }

  handleErase = (event) => {
    event.preventDefault();
    this.setState({
      errands: this.state.errands.filter(tasks => (
        tasks.completed === false
      ))
    })
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm handleAddItem={this.handleAddItem} handleErase={this.handleErase}/>
        <TodoList errand={this.state.errands} handleToggle={this.handleClearToggle}/>
      </div>
    );
  }
}

export default App;
