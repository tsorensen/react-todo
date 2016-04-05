import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from '../containers/FilteredTodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { todos: [], autoId: 1 };
    this.createTodo = this.createTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
  }

  createTodo(name) {
    this.setState({
      autoId: this.state.autoId + 1,
      todos: [
        ...this.state.todos,
        {
          id: this.state.autoId,
          name,
          completed: false
        }
      ]
    });
  }

  toggleTodo(todo) {
    const id = todo.id
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  }

  render() {
    console.log('rendering App');
    return (
      <div>
        <AddTodo onSubmit={this.createTodo} />
        <FilteredTodoList />
      </div>
    );
  }

}

export default App;
