const express = require("express");
const router = express.Router();

const {
  getCart, confirmOrder
} = require("../controller/cartController");

//@desc GET orders by id from users
//@route GET /cart/:id
//Access Public
//TODO Status: working
//Get orders by id
router.get("/:id", getCart);



//@desc confirm the order from cart
//@route get /cart/confirm/:id
//Access user
//TODO status: ?? figure this out!
//need the cart id in req/params
router.post('/confirm', confirmOrder)

module.exports = router;