const ProductController = require('../controllers/product.controller');
module.exports = function(app) {
    // app.get('/api', ProductController.index);
    app.get('/api/products', ProductController.findAllProducts);
    app.post('/api/product', ProductController.createNewProduct);
    app.get('/api/product/:id', ProductController.findOneProduct);
    app.put('/product/:id/edit', ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}

