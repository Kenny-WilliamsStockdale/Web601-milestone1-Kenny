require("dotenv").config()

const cartData = require("../data/cartData");
const connectDB = require("../Config/db");
const Cart = require("../model/cart");

connectDB();

const importCartData = async () => {
    try {
        await Cart.deleteMany();

        await Cart.insertMany(cartData);

        console.log("Data Import Success")

        process.exit();
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importCartData();