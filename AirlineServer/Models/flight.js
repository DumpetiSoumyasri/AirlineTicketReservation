const mongoose = require('mongoose')
//create User schema
const flightSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    type:{type:String,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    departureTime:{type:String,required:true},
    arrivalTime:{type:String,required:true},
    departureDate:{type:String,required:true},
    arrivalDate:{type:String,required:true}
})
 
//create Model(class) for the userSchema
const Flight =mongoose.model('flight',flightSchema)
 
//export User model
module.exports=Flight;