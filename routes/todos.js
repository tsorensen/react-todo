'use strict';

import express from 'express';

const { Router } = express;
const todosRouter = new Router();

const todos = [];

todosRouter.get('/', (req, res, next) => {
  res.json(todos);
});

todosRouter.post('/', (req, res, next) => {
  if(typeof req.body.name !== 'string') {
    return next(new Error('You must include a `name` field'));
  }
  if(typeof req.body.completed !== 'boolean') {
    req.body.completed = (req.body.completed === 'true') ? true:false;
  }
  let todo = {
    name: req.body.name,
    completed: req.body.completed
  };
  todos.push(todo);
  res.json(todo);
});

todosRouter.get('/:id', (req, res, next) => {
  let todo = todos[req.params.id];
  if(!todo) {
    return res.status(404).send('Todo not found with given id');
  } else {
    res.json(todo);
  }
});

export default todosRouter;
