const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    // app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/products', ProductController.createNewProduct);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.get('/api/products/:id', ProductController.updateProduct);
    app.get('/api/products/:id', ProductController.deleteProduct);
}

