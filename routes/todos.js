'use strict';

import express from 'express';

const { Router } = express;
const todosRouter = new Router();

const todos = [
  {
    name: 'Finish Routes Tutorial',
    copmleted: false
  },
  {
    name: 'Learn React',
    completed: false
  }
];

todosRouter.get('/', (req, res, next) => {
  res.json(todos);
});

todosRouter.get('/:id', (req, res, next) => {
  let todo = todos[req.params.id];
  if(!todo) {
    res.sendStatus(404);
  } else {
    res.json(todo);
  }
})

export default todosRouter;
