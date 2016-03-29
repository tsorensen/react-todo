//just for experimenting with testing the API

'use strict'

import supertest from 'supertest-as-promised';
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('home'));
app.get('/foo', (req, res) => res.send('bar'));
app.post('/foo', (req, res) => {
  req.body.hello = 'world';
  res.status(201).json(req.body);
});
app.get('/hello/:name', (req, res) => res.send(`Hello ${req.params.name}`));
app.use((req, res) => res.sendStatus(404));

const request = supertest(app);

describe('test express app', () => {

  it('gets home', () => {
    return request.get('/')
      .expect(200, 'home');
  });

  it('gets foo', () => {
    return request.get('/foo')
      .expect(200, 'bar');
  });

  it('posts foo', () => {
    return request.post('/foo')
      .send({ foo: 'bar' })
      .expect(201, {
        foo: 'bar',
        hello: 'world'
      });
  });

  it('says hello to Jan', () => {
    return request.get('/hello/Jan')
      .expect(200, 'Hello Jan');
  });

  it('says hello to Bob', () => {
    return request.get('/hello/Bob')
      .expect(200, 'Hello Bob');
  });

  it('gets 404 if route does not exist', () => {
    return request.get('/asdf/asdf')
      .expect(404);
  });

});
