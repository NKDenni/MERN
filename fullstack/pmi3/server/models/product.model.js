const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product must have a name!"]
    },
    price: {
        type: Number,
        required: [true, "Needs to be a valid price"]
    },
    desc: {
        type: String,
        minlength: [5, "Description must be at least 5 charachters long"]
    }
}, { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;