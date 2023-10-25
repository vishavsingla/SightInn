const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true,
        select:false
    },
    name:{
        type:String,
        required:true,
    },
    avatar:{
        publicId:String,
        url:String,
    },
    admin: {
        type: Boolean,
        default: false,
    },

  }
);

module.exports = mongoose.model('user', userSchema);
