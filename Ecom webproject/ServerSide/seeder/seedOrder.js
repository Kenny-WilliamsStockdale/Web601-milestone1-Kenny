const orderData = require("../data/orderData");
const connectDB = require("../config/db");
const Order = require("../model/order");

require("dotenv").config();

console.log(process.env.PORT); 

connectDB();

const importOrderData = async () => {
  try {
    await Order.deleteMany();

    await Order.insertMany(orderData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importOrderData();