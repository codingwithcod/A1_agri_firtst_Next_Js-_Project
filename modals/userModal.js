const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    isMember:{
        type:Boolean,
        default:false
    }
},
{ timestamps:true}
);

// mongoose.models = {}

// const UserModal =  mongoose.model("A1AgriUsers", userSchema)
export default mongoose.models.User || mongoose.model("User", userSchema)


// export default UserModal;