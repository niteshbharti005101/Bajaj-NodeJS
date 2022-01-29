const express = require("express")
const router = express.Router()
const logger = require("../middleware/loggers")
const user = require("../models/UserModel")
router.post("/signup", logger, async(req, res) => {
    const data = req.body
    console.log(data)
    try {
        const user1 = new user({
            email: data.email,
            password: data.password,
            mobile: data.mobile,
            area: data.area,
            pincode: data.pincode,
            country: data.country,
            address: data.area + " " + data.pincode + " " + data.country
        })

        //user1.save().then(() => console.log("User added successfully!!!"))
        /*user1.save((err, data) => {
                if (err) {
                    const errdata = err.code
                    console.log(errdata)

                    //res.send(err)
                    res.send("Error Occured")
                } else {
                    res.send("User added successfully!!!")
                    console.log("User added successfully!!!")
                }
            })*/
        //res.send("User created")

        await user1.save().then(() => res.send("User added successfully!!!"))
        console.log("User added successfully!!!")
    } catch (err) {
        console.log(err)
        res.send("Error Occured")
    }
})
module.exports = router