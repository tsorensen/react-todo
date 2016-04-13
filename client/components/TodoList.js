'use strict'

import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {

  componentWillMount() {
    this.props.init()
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo) => {
            return (
              <li key={todo.id}>
                <Todo
                  name={todo.name}
                  completed={todo.completed}
                  onClick={() => this.props.onTodoClick(todo)}
                  onDeleteClick={() => this.props.onTodoDeleteClick(todo)}
                />
              </li>
            )
          })
        }
      </ul>
    )
  }

}

export default TodoList
