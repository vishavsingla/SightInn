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

  }
);

module.exports = mongoose.model('account', userSchema);
