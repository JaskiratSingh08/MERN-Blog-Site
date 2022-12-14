const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        reuired:true
    },
    profilepic:{
        type: String,
        default:""
    },
}
,{timestamps:true}
);

module.exports = mongoose.model("User", UserSchema);