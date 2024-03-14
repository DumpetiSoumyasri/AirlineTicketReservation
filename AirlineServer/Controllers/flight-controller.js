const Flight = require("../Models/flight");
const {cloudinary}=require('../Middlewares/cloudinary');
const fs=require('fs');

const getAllFlights = async (req, res) => {
    const flights = await Flight.find();
    res.status(200).send({ message: "All flights", payload: flights });
};

const createFlight = async (req,res) => {
    console.log(req.body)

    const flight=req.body

    let existingFlight = await Flight.findOne({id:req.body.id});
    if(existingFlight !== null){
        return res.send({message:"Flight already existed with given ID"});
    }
       const newFlight = await Flight.create(flight);
    res.status(201).send({ message: "flight added", payload: newFlight })
}

const updateFlight = async (req,res) => {
    let flight = await Flight.findOneAndUpdate({ id: req.body.id },{...req.body} );
    res.status(200).send({ message: "Flight modified", payload: flight });
}

const deleteFlight = async (req,res) => {
    let id = req.params.id
    let deletedFlight = await Flight.findOneAndDelete({id:id});
    res.send({message:"flight deleted",payload:deletedFlight,deletedCount:deletedFlight.deletedCount})
}

const getFlightById= async (req,res)=>{
    let id=req.params.id;
    console.log("id from params",id)
    let flightDetails=await Flight.findOne({id:id})
    console.log(flightDetails)
    res.send({message:"flight details by id",payload:flightDetails })

}


module.exports = { getAllFlights,createFlight,updateFlight,deleteFlight,getFlightById }










 
 

 
 

 

 
