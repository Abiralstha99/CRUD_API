const express = require("express");
const router = express.Router();
const Product = require("../models/productmodel");
const {getProducts,getProductsById,updateProduct, deleteProductById, postProduct} = require("../controllers/productControllers");

router.get('/', getProducts);

router.get('/:id', getProductsById);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProductById);

router.post('/', postProduct);


module.exports = router;