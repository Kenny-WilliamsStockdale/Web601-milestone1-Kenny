const product = require('../model/product')
const Users  = require("../model/users");
const Cart  = require("../model/cart");

const getProducts = async (req,res) => {
    try {
        
        const products = await product.find({})

        res.status(200).json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'})

    }
}

const getProductById = async (req,res) => {
    try {
        
        const products = await product.findById(req.params.id)

        res.status(200).json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'})

    }
}

//add item to cart
const addItem = async (req, res) => {
    try {
        const currentProduct = await product.findOne({name: req.body.name})
        const checkCart = await Cart.findOne({email: req.params.email})
        if(currentProduct.countInStock <1 || currentProduct.availability == false){
            res.status(500).json({ message: "product is unavailable"})
        } else if (!checkCart) {
            const {name,price} = req.body
            newCart = await Cart.create({
                email: req.params.email,
                products:{
                    [name] : 1
                },
                subtotal:price
            })
            await product.updateOne({name: req.body.name},{$inc:{countInStock:-1}})
            res.status(200).json({message:`${newCart.email}`})
        } else {
            const field = `products.${req.body.name}`
            const currentCart = await Cart.updateOne(
                {email: req.params.email},
                {$inc:{[field]:1,subtotal:req.body.price}}
            )
            await product.updateOne({name: req.body.name},{$inc:{countInStock:-1}})
            res.status(201).json({message:"another of the item added to cart"})
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "add item error" })
    }
}

const editProduct = async(req, res) => {
    try {
        const updatedProduct = await product.updateOne({_id:req.params.id},{$set:req.body},{upsert:true})
        res.json(updatedProduct)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
}

// Add a new product to the DB
const addNewProduct = async(req, res) => {
    try {
        const newProduct = await product.updateOne({name:req.body.name},{$set:req.body},{upsert:true}) // the product is added through ":id"
        res.json(newProduct)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
}

// Delete product
const deleteProduct = async(req, res) => {
    try {
        const deletedProduct = await product.deleteOne({_id:req.params.id});
        res.status(200).json({message: "Delete successful"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
}

module.exports = {
    getProducts,
    getProductById,
    addItem,
    editProduct,
    addNewProduct,
    deleteProduct
}