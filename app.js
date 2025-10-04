import express from 'express';
const router = express.Router();

let books = [];

router.get('/', (req, res) => {
  res.json(books);
});

router.post('/', (req, res) => {
  books.push(req.body);
  res.status(201).json({ message: 'Book added!', book: req.body });
});

export default router;
