const mongoose = require('mongoose')
//create User schema
const bookticketSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    dob:{type:Date,required:true},
    mblno:{type:Number,required:true},
    gender:{type:String,required:true}
})
 
//create Model(class) for the userSchema
const Bookticket =mongoose.model('bookticket',bookticketSchema)
 
//export User model
module.exports=Bookticket;