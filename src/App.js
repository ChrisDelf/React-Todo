import React from 'react';
import TodoList from './components/TodoComponents/TodoList.js';
import './components/TodoComponents/Todo.css';

import TodoForm from './components/TodoComponents/TodoForm.js';
// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state

const todoList = [{
}];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      id: '',
      completed: false,
      todoList: todoList
    };
   this.toggleItem = this.toggleItem.bind(this)
  }

  toggleItem = id => {
    console.log('Id', id)
    this.setState({
      todoList: this.state.todoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };
  addItem = taskName => {
    const newItem = {
      name: taskName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newItem]
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
          <TodoList
            todoList={this.state.todoList}
            toggleItem={this.toggleItem}
          />
        </div>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
