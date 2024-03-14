//create a route(mini express app)
const exp = require('express')
const adminApp = exp.Router()

//add express-async-handler to handle async errors
const expressAsyncHandler = require('express-async-handler')

const { createAdmin, loginAdmin } = require('../Controllers/admin-controller')

//create admin
adminApp.post('/admin', expressAsyncHandler(createAdmin))
//login admin
adminApp.post('/login', expressAsyncHandler(loginAdmin))


module.exports = adminApp;