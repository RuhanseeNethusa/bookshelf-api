import express from 'express';
import booksRoute from './routes/books.js';

const app = express();

app.use(express.json());
app.use('/books', booksRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));


export default app;
