const mongoose=require('mongoose')
 
//create user Schema
const flightaddSchema=new mongoose.Schema({
    id:{type:Number,required:true},
    type:{type:String,required:true},
    from:{type:String,required:true},
    to:{type:String,required:true},
    imageUrl:{type:String,required:true},
    departureTime:{type:String,required:true},
    arrivalTime:{type:String,required:true},
    departureDate:{type:String,required:true},
    arrivalDate:{type:String,required:true}
})
//create model(class) for that userSchema
const Addflight=mongoose.model('flight',flightaddSchema)
 
 
//export user model
module.exports=Addflight;