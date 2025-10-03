const express = require('express');
const booksRoute = require('./routes/books');
const app = express();

app.use(express.json());
app.use('/books', booksRoute);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

module.exports = app;
