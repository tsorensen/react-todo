'use strict'

import Promise from 'bluebird'
import chai from 'chai'
import supertest from 'supertest-as-promised'
import Todo from '../lib/todos'
import app from '../app'

Promise.promisifyAll(Todo)

const request = supertest(app)
const expect = chai.expect

describe('todos', () => {

  beforeEach(() => {
    return Todo
      .findAsync()
      .then((todos) => {
        return Promise.all(todos.map((todo) => Todo.deleteAsync(todo.id)))
      })
  })

  it('gets empty array with no todos', () => {
    return request.get('/api/todos')
      .expect(200, []);
  });

  it('gets a list of todos with a few todos', () => {
    const names = [ 'foo', 'bar', 'hello' ];
    return Promise
      .all(names.map((name) => Todo.createAsync({ name })))
      .then(() => {
        return request.get('/api/todos').expect(200);
      })
      .then((res) => {
        const todos = res.body;
        expect(todos).to.have.length(3);
        todos.forEach((todo) => {
          expect(todo).to.have.property('name');
          expect(todo).to.have.property('id');
          expect(todo).to.have.property('completed');
        });
        expect(todos[0]).to.have.property('name', 'foo');
        expect(todos[1]).to.have.property('name', 'bar');
        expect(todos[2]).to.have.property('name', 'hello');
      });
  });

  it('creates a todo')

  it('defaults created to false')

  it('updates a todo')

  it('deletes a todo')

  it('fails to update if id does not exist')

  it('fails to delete if id does not exist')

})
