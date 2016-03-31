'use strict'

import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

// This is a stubbed reducer. We'll use a real one in a bit
const reducer = (state = {}, action) => state

const devTools = typeof window === 'object'
  && typeof window.devToolsExtension !== 'undefined'

export default (initialState) => {
  return createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    devTools ? window.devToolsExtension() : (f) => f
  ))
}
