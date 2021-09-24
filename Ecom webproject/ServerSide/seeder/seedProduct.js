require('dotenv').config()

const connectDB = require('../Config/db')

const productData = require("../data/productData")
const Product = require("../model/product")

connectDB();

const importProductData = async () => {
    try {
        await Product.deleteMany()

        await Product.insertMany(productData)

        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importProductData();