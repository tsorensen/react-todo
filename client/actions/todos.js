'use strict'

let autoId = 1;

export const createTodo = (name) => ({
  type: 'TODO_CREATE',
  payload: {
    id: autoId++,
    name,
    completed: false
  }
});

export const updateTodo = (id, partial) => ({
  type: 'TODO_UPDATE',
  payload: {
    id,
    partial
  }
});

export const deleteTodo = (id) => ({
  type: 'TODO_DELETE',
  payload: id
});

export const clearCompleted = (todos) => ({
  type: 'CLEAR_COMPLETED',
  payload: todos
    .filter((todo) => todo.completed)
    .map((todo) => todo.id)
});
