const express = require('express');
const router = express.Router();

let books = [];

// GET /books
router.get('/', (req, res) => {
  res.json(books);
});

// POST /books
router.post('/', (req, res) => {
  const { title, author } = req.body;
  books.push({ title, author });
  res.status(201).json({ message: 'Book added!' });
});

module.exports = router;
