const posts = require('../data/posts.js');


// index
function index(req, res) {
  res.json(posts);
};

// show
function show(req, res) {
  const postId = req.params.id;
  res.send('Dettagli del post ' + postId);
};

// store
function store(req, res) {
  const postId = req.params.id;
  res.send('Creazione di un nuovo post');
};

// update
function update(req, res) {
  const postId = req.params.id;
  res.send('Modifica integrale del post ' + postId);
};

// modify
function modify(req, res) {
  const postId = req.params.id;
  res.send('Modifica parziale del post ' + postId);
};

// destroy
function destroy(req, res) {
  const postId = req.params.id;
  res.send('Eliminazione del post ' + postId);
};

module.exports = { index, show, store, update, modify, destroy };