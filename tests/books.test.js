const request = require('supertest');
const app = require('../app'); // Import the Express app
const { expect } = require('chai');

describe('Books API', function () {
  it('GET /books should return an array', async function () {
    const res = await request(app).get('/books');
    expect(res.status).to.equal(200);
    expect(res.body).to.be.an('array');
  });

  it('POST /books should add a new book', async function () {
    const res = await request(app)
      .post('/books')
      .send({ title: '1984', author: 'George Orwell' });
    expect(res.status).to.equal(201);
    expect(res.body.message).to.equal('Book added!');
  });
});
