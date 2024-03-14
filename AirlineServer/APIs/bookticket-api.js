const exp = require("express");
const flightticketApp = exp.Router();

const expressAsyncHandler = require("express-async-handler");

const {
  getUserDetails,
  createUserDetails
} = require("../Controllers/bookticket-controller");

flightticketApp.get('/ticket/:username', expressAsyncHandler(getUserDetails));

flightticketApp.post('/ticket', expressAsyncHandler(createUserDetails));

module.exports = flightticketApp