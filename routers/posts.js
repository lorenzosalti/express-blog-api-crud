const express = require('express');
const router = express.Router();
const posts = require('../data/posts.js');


// index
router.get('/', (req, res) => {
  res.send('Lista dei post');
});

// show
router.get('/:id', (req, res) => {
  const postId = req.params.id;
  res.send('Dettagli del post ' + postId);
});

// store
router.post('/', (req, res) => {
  const postId = req.params.id;
  res.send('Creazione di un nuovo post');
});

// update
router.put('/:id', (req, res) => {
  const postId = req.params.id;
  res.send('Modifica integrale del post ' + postId);
});

// modify
router.patch('/:id', (req, res) => {
  const postId = req.params.id;
  res.send('Modifica parziale del post ' + postId);
});

// destroy
router.delete('/:id', (req, res) => {
  const postId = req.params.id;
  res.send('Eliminazione del post ' + postId);
});


module.exports = router;