const posts = require('../data/posts.js');



// index
function index(req, res) {
  res.json(posts);
};



// show
function show(req, res) {

  const postId = parseInt(req.params.id);
  const requiredPost = posts.find(posts => posts.id === postId);

  if (!requiredPost) {
    return res.status(404).json({
      status: 404,
      error: 'Not found',
      message: 'Post non trovato'
    });
  };

  res.json(requiredPost);
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

  const postId = parseInt(req.params.id);
  const requiredPost = posts.find(posts => posts.id === postId);

  if (!requiredPost) {
    return res.status(404).json({
      status: 404,
      error: 'Not found',
      message: 'Post non trovato'
    });
  };

  posts.splice(posts.indexOf(requiredPost), 1);

  console.log(posts);

  res.status(204).json(posts);

};



module.exports = { index, show, store, update, modify, destroy };