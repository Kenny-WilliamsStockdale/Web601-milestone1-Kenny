// require("dotenv").config({ path: "../.env" });
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        // console.log(process.env.MONGO_URI)
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true
        });

        console.log("MongoDB connect SUCCESS");
    } catch (error) {
        console.log("MongoDB connect FAIL");
        process.exit();
    }
};

module.exports = connectDB;