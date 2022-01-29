const express = require("express")
const router = express.Router()
const logger = require("../middleware/loggers")
const user = require("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { findOne } = require("../models/UserModel")
const res = require("express/lib/response")
router.post("/signin", logger, async(req, res) => {
    const data = req.body
    try {
        //data.email data.password
        const result = await user.findOne({ email: data.email })
        console.log(result.password)
        const authenticate = await bcrypt.compare(data.password, result.password)
        if (authenticate) {
            const token = jwt.sign({ email: user.email }, "jamesbond")
            console.log(token)
            const signinInfo = {
                Msg: "Signed in Successfully",
                jwttoken: token
            }
            res.send(signinInfo)
        } else {
            res.send("Wrong password")
        }
    } catch (err) {
        console.log(err)
    }
})
module.exports = router