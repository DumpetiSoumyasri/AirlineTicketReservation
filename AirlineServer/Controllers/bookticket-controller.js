const Bookticket = require("../Models/bookticket");
const fs=require('fs');

const getUserDetails = async (req, res) => {
    const userdetails = await Bookticket.findOne({username:req.params.username});
    console.log(userdetails)
    res.status(200).send({ message: "User Details", payload: userdetails });
};

const createUserDetails = async (req,res) => {
    console.log(req.body)
    const Userdetails=req.body
    const newUserdetails = await Bookticket.create(Userdetails);
    res.status(201).send({ message: "userdetails added", payload: newUserdetails })
}

module.exports = { getUserDetails,createUserDetails }
