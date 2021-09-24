require('dotenv').config()

const connectDB = require('../Config/db')

const usersData = require("../data/usersData")
const Users = require("../model/users")

connectDB();

const importUserData = async () => {
    try {
        await Users.deleteMany({})

        await Users.insertMany(usersData)

        process.exit();

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

importUserData();