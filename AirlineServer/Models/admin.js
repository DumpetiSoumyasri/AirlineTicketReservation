const mongoose=require('mongoose')
//create user Schema
const adminSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minLength:4
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    email:String,
    dob:String
})
//create model(class) for that sellerSchema
const Admin=mongoose.model('admin',adminSchema)


//export user model
module.exports=Admin;