const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  orderDate:
  {
    type: Date, 
    default: Date.now, 
    required: true
  },
  email: 
  {
    type: String, 
    required: true
  },
  products: Object,
  subtotal: 
  { 
    type: Number, 
    required: true 
  },
  status: 
  { 
    type: String, 
    required: true 
  },
},{timestamp:true});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order