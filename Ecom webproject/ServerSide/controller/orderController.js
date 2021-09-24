const Order = require("../model/order");
const Users = require("../model/users");


// get all Orders
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.status(302).json(orders)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message:"Server error"});
  }
};

const getOrdersById = async(req, res) => {
  try {
      // get current users id
      const currentUser = await Users.findById(req.params.id)
      // find order with the current user id
      const order = await Order.findOne({email:currentUser.email}); 
  
      res.status(200).json(order)
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "server error" })
  }
}

// find order by Id
const findOrderbyId = async(req, res) => {
  try {
      const order = await Order.findById(req.params.id);
      res.status(200).json(order)
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: "server error" })
  }
}

//update order status
const updateOrderStatus = async(req, res) => {
  try {
      // find order with Order Id and set new data
      const updatedOrder = await Order.updateOne({_id:req.params.id},{$set:{status:req.body.status}},{upsert:true})
      //return all ok and print update complete
      res.status(200).json({message:"Update complete"})
  } catch (error) {
      console.error(error);
      res.status(200).json({ message: "server error" })
  }
}

module.exports = {
  getOrders,
  getOrdersById,
  findOrderbyId,
  updateOrderStatus
  };