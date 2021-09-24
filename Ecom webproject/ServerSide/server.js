require("dotenv").config({ path: "../.env" });
const express = require('express');
const connectDB = require('./Config/db')
const path = require('path')
const { notFound, errorHandler } = require('./middleware/error-middleware')

// Routes
const productRoutes = require('./routes/productRoutes')
const usersRoutes = require('./routes/usersRoutes')
const cartRoutes = require('./routes/cartRoutes')
const orderRoutes = require('./routes/orderRoutes')
const adminRoutes = require('./routes/adminRoutes');
const { application } = require("express");

// start middleware


connectDB();
const app = express();

app.use((req, res, next) => {
    console.log("Read request");
    next();
})

// //view
app.set('view engine', 'pug')
app.set("views", path.join(__dirname+"/view"))
app.use(express.json())
app.use(express.static('public'));
//static
app.use("/static",express.static(path.join(__dirname+"/static")))

//------routes------
//list of products
app.use("/products", productRoutes)
//list of users
app.use("/users", usersRoutes)
//List of cart
app.use("/cart", cartRoutes)
//List of orders
app.use("/order", orderRoutes);
//List of admin
app.use("/admin", adminRoutes)

app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => {console.log('server started');});