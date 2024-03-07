//create express app
const exp=require('express')
const app=exp();
const path=require('path')
 
//configure environment variables
require('dotenv').config()
//add body parsing middleware
app.use(exp.json())
 
const mongoose=require('mongoose');
const DB_URL=process.env.ATLAS_DB_URL;
//coonect to DB
mongoose.connect(DB_URL)
.then(()=>{
    console.log("DB connection success")
})
.catch(err=>console.log("Error in DB connect",err))
 
//connect angular app with server
app.use(exp.static(path.join(__dirname,'../airline/dist/airline/browser')))
 
 
//import api
const userApp=require('./APIs/user-api');
const flightApp = require('./APIs/flight-api');
 
//forward req to userApp when path starts with '/user-api'
app.use('/user-api',userApp)
app.use('/flight-api',flightApp)

//to load frontend url
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../airline/dist/airline/browser/index.html'))
})
 
 
//error handler
app.use((err,req,res,next)=>{
    res.send({message:'error occuurred',payload:err.message})
})
 
//asign port number
const PORT=process.env.PORT || 4000;
app.listen(PORT,()=>console.log(`web server started at port ${PORT}`))