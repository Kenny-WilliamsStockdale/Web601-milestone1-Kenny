const Users = require('../model/users')
const product = require('../model/product')
const Order = require('../model/order')

//-------------ANCHOR Client section-------------
// Register new users
const registerUser = async (req, res) => {
    try {
        const {email, firstName, username, lastName, password, isAdmin} = req.body;
        const userExists = await Users.findOne({ email: email })
        if (userExists) {
            res.status(400).json({ message:"lol"})
            
        } else if (!userExists) {
            await Users.create(req.body)
            res.status(201).json( {
                message: "Registration Successful",
            })
            
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }

}

//Check user log in
const authUser = async (req, res) => {
    try {// getting email and password details from req body
        const { email, password } = req.body;
        const user = await Users.findOne({ email: email })
        if (user && (await user.matchPassword(password))) {
            if (user.isAdmin == true) {
                res.status(200).json({
                    message: `Welcome Admin ${user.name}`
                })
                console.log("Admin")
                res.redirect("/admin/home");
            }else {
                res.status(200).json({
                    message: `Welcome ${user.name}`
                })
                console.log("User")
                res.redirect("/product");
            }
        } else {
            res.status(500).json({ message: "Invalid username/password" })
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
}

const searchProduct = async (req, res) => {
    try {// getting email and password details from req body
        const aggregate = []
        const { search, sort, type } = req.body;
        if (search !== "") {
            const regex = new RegExp(search, "i")
            if (type == 0 || type == "name") { aggregate.push({ $match: { name: { $regex: regex } } }) }
            if (type == "category") { aggregate.push({ $match: { category: { $regex: regex } } }) }
            if (sort != 0) { aggregate.push({ $sort: { price: sort } }) }
        }
        const products = await product.aggregate(aggregate)
        res.status(200).json(products)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })
    }
}

//-------------ANCHOR Admin section-------------
// get users
const getUsers = async (req,res) => {
    try {
        const usersList = await Users.find().sort({ name: -1 });

        
        res.status(200).json(usersList)
    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Server Error'})

    }
}

// get user by id
const getUsersById = async (req,res) => {
    try {
        const currentUsers = await Users.findById(req.params.id)
        res.status(200).json(currentUsers)
    } catch (error) {
        console.error(error);
        res.status(500).json({message:'Server Error'})

    }
}

//FIXME edit user detail
const updateUser = async (req, res) => {
    try {
        const updatedUser = await Users.updateOne({ _id: req.params.id }, { $set: req.body }, { upsert: true })
        res.json(updatedUser)
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "server error" })
    }
}

// delete user
const deleteUser = async (req, res) => {
    try {
        const deletedUser = await Users.deleteOne({ _id: req.params.id })
        res.json(deletedUser)
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "server error" })
    }
}

const searchOrder = async (req, res) => {
    try {// getting email and password details from req body
        console.log
        const aggregate = []
        const { search, sort, type } = req.body;
        if (search !== "") {
            const regex = new RegExp(search, "i")
            if (type == 0 || type == "email") { aggregate.push({ $match: { email: { $regex: regex } } }) }
            if (type == "status") { aggregate.push({ $match: { status: { $regex: regex } } }) }
        }
        if (sort != 0 || sort == "date") {
            aggregate.push({ $sort: { orderDate: 1 } })
        } else if (sort == "status") {
            aggregate.push({ $sort: { state: 1 } })
        }
        const products = await Order.aggregate(aggregate)
        res.status(200).json(products)
    } catch (e) {
        console.error(e);
        res.status(500).json({ message: "server error" })
    }
}

//get user by email
const getUserByEmail = async (req, res) => {
    try {
      
      const users = await Users.findOne({ email: req.params.userEmail });
  
      res.json(users);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
  };


//-------------ANCHOR module section-------------

const customerController = {
    registerUser,
    authUser,
    searchProduct,
    getUserByEmail
};

const adminController = {
    getUsers,
    getUsersById,
    updateUser,
    deleteUser,
    searchOrder
};

module.exports = {
    ...customerController,
    ...adminController,
}; 