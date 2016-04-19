'use strict'

import express from 'express';
import Todo from '../models/todo';

const { Router } = express;
const todosRouter = new Router();

todosRouter.get('/', (req, res, next) => {
  Todo.find()
    .exec()
    .then((todos) => res.json(todos))
    .catch(next);
});

todosRouter.post('/', (req, res, next) => {
  Todo.create(req.body)
    .then((todo) => res.status(201).json(todo))
    .catch(next);
});

todosRouter.get('/:id', (req, res, next) => {
  Todo.findOne({ _id: req.params.id })
    .exec()
    .then((todo) => {
      if (!todo) {
        return res.sendStatus(404);
      }
      res.json(todo);
    })
    .catch(next);
});

todosRouter.put('/:id', (req, res, next) => {
  Todo
    .findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true } // Returns the updated document
    )
    .exec()
    .then((todo) => {
      if (!todo) {
        return res.sendStatus(404);
      }
      res.json(todo);
    })
    .catch(next);
});

todosRouter.delete('/:id', (req, res, next) => {
  Todo
    .findOneAndRemove({ _id: req.params.id })
    .then(() => res.sendStatus(204))
    .catch(next);
});

export default todosRouter;
