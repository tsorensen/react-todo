'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// This is a stubbed reducer. We'll use a real one in a bit
const reducer = (state = [], action) => {
  switch(action.type) {
    case 'TODO_CREATE':
      return [
        ...state,
        action.payload
      ];
    case 'TODO_UPDATE':
      return state.map((todo) => {
        if(todo.id === action.payload.id) {
            todo = Object.assing(todo, action.payload.partial);
        }
        return todo;
      });
    case 'TODO_DELETE':
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};

const devTools = typeof window === 'object'
  && typeof window.devToolsExtension !== 'undefined'

export default (initialState) => {
  return createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    devTools ? window.devToolsExtension() : (f) => f
  ))
}
