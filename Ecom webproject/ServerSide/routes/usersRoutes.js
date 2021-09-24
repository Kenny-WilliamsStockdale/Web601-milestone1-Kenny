const express = require('express');
router = express.Router();

const {
    getUsersById, 
    authUser, 
    registerUser, 
    searchProduct, 
} = require('../controller/userController')

//@desc GET users by id from db 
//@route GET /users/:id
//Access Admin
//TODO status: working
// Get users
router.get('/user/:id', getUsersById)

//@desc authenticate user to check if admin or customers as well as email and encrypted password pair matched
//@route get /user/login
//access public
//TODO status: ??
// need email and password from request body
router.post('/login', authUser)

//@desc create new user if everything is fine and encrypt the password
//@route get /user/register/
//access public
//TODO status: Working
// need data from request body
router.post('/register', registerUser)

//@desc search the database with user input
//@route get /user/search/
//access public
//TODO status: working
// {
//     "sort":"",
//     "search":"",
//     "type":0
// }
//need to have filter in request body
router.get('/search', searchProduct)

module.exports = router;