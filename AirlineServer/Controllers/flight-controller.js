const Flight = require("../Models/flight");
const {cloudinary}=require('../Middlewares/cloudinary');
const fs=require('fs');

const getAllFlights = async (req, res) => {
    const flights = await Flight.find();
    res.status(200).send({ message: "All flights", payload: flights });
};

const createFlight = async (req,res) => {
    const flight=JSON.parse(req.body.articleObj);
    // const newFlight = await Flight.create(req.body)
       //upload image to cloudinary
       let result=await cloudinary.uploader.upload(req.file.path);
       //add cloudinary image url to article
       flight.imageUrl=result.url;
       const newFlight = await Flight.create(flight);
    //remove image from local folder
    fs.unlink(req.file.path,err=>{
        if(err){
            throw err
        }
        console.log('image removed from local folder')
    });
    res.status(201).send({ message: "flight added", payload: newFlight })
    // res.send({message:"flight added", payload: newFlight})
}

const updateFlight = async (req,res) => {
    let flight = await Flight.findOneAndUpdate({ id: req.body.id },{...req.body} );
    res.status(200).send({ message: "Flight modified", payload: flight });
}

const deleteFlight = async (req,res) => {
    let id = req.params.id
    let deletedFlight = await Flight.findOneAndDelete({id:id});
    res.send({message:"flight deleted",payload:deletedFlight})
}


module.exports = { getAllFlights,createFlight,updateFlight,deleteFlight }










 
 

 
 

 

 
