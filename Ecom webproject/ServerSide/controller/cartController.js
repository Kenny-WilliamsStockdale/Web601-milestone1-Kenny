const Cart = require("../model/cart");
const Order= require("../model/order");

// get the cart from user 
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findById( req.params.id)
    res.status(200).json(cart);
    const currentCart = await Cart.find({ 
      email: req.params.id,  //req.session.userId
    });

    if (!currentCart) {
      res.status(200).json({message: "Empty cart"})
    }
    else if (currentCart !== [] ) {
      res.status(200).json(currentCart);
    } 
    
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// update cart total price 
// const updateTotal = async (req, res) => {
//   try {
//       const {products} = await Cart.findOne({
//           email:req.body.email
//       })
//       let total = 0
//       for ( const quantity in products){
//           const {price} = await Product.findOne({name:item})
//           total += parseFloat(price)* parseInt(products[quantity])
//       }
//       const request = await Cart.updateOne({email:req.body.email},{$set:{subtotal:total}})
//       res.status(200).json(request)
//   } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: "update error" })
//   }
// }

// read current data from the cart then creates order
const confirmOrder = async function(req, res) {
  try {
      //get data from cart
      const {products,email,subtotal} = req.body
      // pass data to create an order
      await Order.create({
        products: products,
        email: email,
        subtotal: subtotal,
        status:"In progress"}); // the order is added through ":id"
      // remove the current cart
      await Cart.deleteOne({email: email})
      res.status(200).json({message:"successful"})
  } catch (error) {
    // const orderExists = await Order.findOne({id});
    // if (orderExists) {
        console.error(error);
        res.status(500).json({ message: "server error" })
 
  }
}

module.exports = {
  getCart,
  // updateTotal,
  confirmOrder
  };
