const express = require('express');
router = express.Router();

const {getProducts, getProductById, addItem} = require('../controller/productController')

//@desc GET all products
//@route GET /products
//Access Public
//TODO Status: Working
// Get products
router.get("/", getProducts)

//@desc GET a products by id from db 
//@route GET /products/:id
//Access Public
//TODO status: Working
// Get products
router.get("/:id", getProductById)

//@desc add an item to cart
//@route get /product/add/:id
//Access public
//TODO status: ??
//need user id for params
router.post('/add/:email', addItem)

module.exports = router;