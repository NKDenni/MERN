const AuthorController = require('../controllers/authors.controller');
module.exports = function (app) {
    app.get('/api/authors', AuthorController.findAllAuthors);
    app.post('/api/authors', AuthorController.createNewAuthor);
    app.get('/api/author/:id', AuthorController.findOneAuthor);
    app.put('/api/edit/:id', AuthorController.updateAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAuthor);
}

