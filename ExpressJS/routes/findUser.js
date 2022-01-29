const express = require("express")
const router = express.Router()
const logger = require("../middleware/loggers")
const user = require("../models/UserModel")
router.get("/findall", async(req, res) => {
    //const result = await user.findOne({}, { _id: 0, password: 0, __v: 0 })

    /*const result = await user.findById({ _id: "61f4cf8418feb150c131fd58" })
    console.log(result)
    res.send(result)*/

    const result = await user.find()
    const test = result.map((item) => {
        const pass = item.password
        const st = "*".repeat(pass.length)
        const arr = [{
            email: item.email,
            password: st,
            mobile: item.mobile,
            country: item.country,
            pincode: item.pincode,
            address: item.area + " " + item.pincode + " " + item.country
        }]
        return arr
    })
    console.log(result)
    res.send(test)


})
module.exports = router