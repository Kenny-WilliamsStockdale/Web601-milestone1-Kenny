const mongoose = require("mongoose");
const product = require("./product");
const cartSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false
},
products: {
    type: Object, 
    required: true
},
subtotal:{
    type: Number,
    required: true
}
});

//update cart quantities in database as items are added and deleted
cartSchema.pre('save',async function(next){
    let total = 0
    for ( const quantity in this.products){
        const {price} = await product.findOne({name:quantity})
        total += parseFloat(price)* parseInt(this.products[quantity])
    }
    this.subtotal = total
    next()
})

const cart = mongoose.model("cart", cartSchema);
module.exports = cart