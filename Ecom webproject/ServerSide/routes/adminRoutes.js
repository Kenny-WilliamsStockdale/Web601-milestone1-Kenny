const express = require("express")
const router = express.Router();

const {
    getUsers,
    getUsersById,
    deleteUser,
    searchOrder
} = require("../controller/userController")

const {
    getOrders,
    findOrderbyId,
    updateOrderStatus
} = require("../controller/orderController")

const {
    editProduct,
    addNewProduct,
    deleteProduct
} = require("../controller/productController")

//-------------ANCHOR user section-------------
//@desc GET all users
//@route GET /admin/user
//Access Public
//TODO status: working
// Get users
router.get("/user", getUsers)

//@desc GET users by id from db 
//@route GET /admin/user/:id
//Access Admin
//TODO status: working
// Get users
router.get('/user/:id', getUsersById)

//@desc delete user from database
//@route get /admin/deleteUser/:id
//access admin
//TODO status: working
//need user id
router.post('/deleteUser/:id', deleteUser)

//@desc, search order 
//@route get /admin/search/
//access admin
//TODO status: working
//need to have filter in req.body
//Syntax:
// {
//     "sort":"",
//     "search":"",
//     "type":0
// }
router.get('/search', searchOrder)

//-------------ANCHOR order section-------------
//@desc, GET all orders
//@route GET /admin/order/
//Access admin
// TODO status: working
//Get orders
router.get('/order', getOrders)

//@desc get a order by id from db
//@route get /admin/order/:id
//access admin
// TODO status: working
//need order id in req.params order id
router.get('/order/:id', findOrderbyId)

//@desc update order status
//@route post /admin/updateOrder/:id
//access admin
// TODO status: working
// need order id in req.params and new data in req.body
router.post('/updateOrder/:id', updateOrderStatus)

//-------------ANCHOR product section-------------
//@desc delete product from database
//@route get /admin/deleteProduct/:id
//access admin
//TODO status: working
//need product id for req.params
router.post('/deleteProduct/:id', deleteProduct )


//desc add new product to database
//route get /admin/new
//access admin
//TODO status: working
//need product details in req.body
//use schema 
router.post('/new', addNewProduct)

//desc edit products details
//route get /admin/product/edit/:id
//access admin
//TODO status: working
//need product id in req.params and product details in req.params
router.post('/product/edit/:id', editProduct)


module.exports = router