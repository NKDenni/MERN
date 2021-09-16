const Product = require('../models/product.model');

module.exports = {
    
    findAllProducts: (req, res) => {
        console.log("All products");
        //use the model to connect to the collection and find/return all documents
        Product.find({}) //find all documents. don't filter anything out
            .then((allProducts) => {
                res.json(allProducts);
            })
            .catch((err) => {
                console.log("Get all products failed");
                res.status(400).json(err);
            })
    },

    findOneProduct: (req, res) => {
        //id will come to us from the param/url/route call    /api/Products/:id
        Product.findOne({ _id: req.params.id })
            .then((oneProduct) => res.json(oneProduct))
            .catch((err) => {
                console.log("Find one product failed");
                res.status(400).json(err)
            })
    },

    createNewProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => res.json(newProduct))
            .catch((err) => {
                console.log("Create products failed");
                res.status(400).json(err)
            })
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate(
            //id will come to us from the param/url/route call    /api/Products/:id
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => res.json({ message: 'Something went wrong', error: err }))
    },

    deleteProduct: (req, res) => {
        //id will come to us from the param/url/route call    /api/Products/:id
        Product.deleteOne({ _id: req.params.id })
            .then((deletedProduct) => res.json({ deleted: deletedProduct }))
            .catch((err) => res.json({ message: "Errors in deleteProduct", error: err }))
    }
}

