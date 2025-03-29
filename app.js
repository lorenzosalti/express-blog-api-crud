const express = require('express');
const app = express();
const postsRouter = require('./routers/posts.js');
const port = 3000;

// public folder
app.use(express.static('public'));

// homepage
app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// posts router
app.use('/posts', postsRouter);

// server listen
app.listen(port, () => {
  console.log('Server in ascolto alla porta ' + port);
});