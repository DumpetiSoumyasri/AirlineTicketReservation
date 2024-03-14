const exp = require("express");
const flightApp = exp.Router();

const expressAsyncHandler = require("express-async-handler");


//import req handlers from Controller
const {
  getAllFlights,
  createFlight,
  updateFlight,
  deleteFlight,
  getFlightById
} = require("../Controllers/flight-controller");

flightApp.get('/flights', expressAsyncHandler(getAllFlights));

flightApp.post('/flight', expressAsyncHandler(createFlight));

flightApp.put('/flight', expressAsyncHandler(updateFlight));

flightApp.delete('/flight/:id', expressAsyncHandler(deleteFlight));


flightApp.get('/flight/:id', expressAsyncHandler(getFlightById));


module.exports = flightApp;














