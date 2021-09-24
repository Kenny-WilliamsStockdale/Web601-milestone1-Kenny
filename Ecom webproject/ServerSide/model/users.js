const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    DOB: {
        type: String,
        required: false,
    },
    password: {
        type: Object,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    pic:{
        type:String,
        required:false,
        default:""
    },
},{
    timestamp:true,//this will check when the user is created and updated
});


userSchema.pre('save', async function(next){
    const saltRounds = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, saltRounds);
    next();
});
const Users = mongoose.model('Users', userSchema);
module.exports = Users