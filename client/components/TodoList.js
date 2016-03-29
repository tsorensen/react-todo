import React from 'react';
import Todo from './Todo'; // Import our Todo component that we just wrote.

const TodoList = (props) => {
  return (
    <ul>
      {
        props.todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo
                name={todo.name}
                completed={todo.completed}
                onClick={() => props.onTodoClick(todo)}
              />
            </li>
          );
        })
      }
    </ul>
  );
};

export default TodoList;
