const Admin = require('../Models/admin')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')



//Create new admin
const createAdmin = async (req, res) => {

    //check for existing admin with same username
    let existingAdmin = await Admin.findOne({ username: req.body.username })

    //if admin already existed
    if (existingAdmin !== null) {
        return res.status(201).send({ message: "admin already existed" })
    }
    //if admin not existed
    else {
        //hash the password
        const hashedPassword = await bcryptjs.hash(req.body.password, 6)
        //replace plain password with hashed password
        req.body.password = hashedPassword;
        const newAdmin = await Admin.create(req.body)
        res.status(201).send({ message: "admin created", payload: newAdmin })
    }
}

//admin login
const loginAdmin = async (req, res) => {
    //get admin credentials object from req
    const adminCredentials = req.body;
    //check  adminname
    let admin = await Admin.findOne({ username: adminCredentials.username })
    //if invalid username
    if (admin === null) {
        return res.status(200).send({ message: "Invalid username" })
    }
    //if adminname is found
    else {
        //compare passwords
        const result = await bcryptjs.compare(adminCredentials.password, admin.password)
        //if passwords are not matched
        if (result === false) {
            return res.status(200).send({ message: "Invalid Password" })
        }
        //if passwords are matched
        else {
            //create a jwt  token and sign
            const signedToken = jwt.sign({ username: admin.username }, process.env.SECRET_KEY, { expiresIn: '1d' })
            //send token to client
            res.status(200).send({ message: "login successs", token: signedToken, admin: admin })
        }
    }
}



module.exports = { createAdmin, loginAdmin }