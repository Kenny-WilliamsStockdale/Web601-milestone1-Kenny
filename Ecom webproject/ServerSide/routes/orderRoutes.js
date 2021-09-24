const express = require("express");
const router = express.Router();

const {
  getOrdersById,
} = require("../controller/orderController");

//@desc GET orders by id from db of user
//@route GET /order/user/:id
//Access Public
// TODO status: working 
//Get orders by user id
router.get("/user/:id", getOrdersById);

module.exports = router;