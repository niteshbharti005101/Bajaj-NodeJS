const express = require("express")
const async = require("hbs/lib/async")
const router = express.Router()
const logger = require("../middleware/loggers")
const user = require("../models/UserModel")
router.post("/delete", async(req, res) => {
    try {
        const data = req.body
        const result = await user.remove({ email: data.email })
        console.log(result)
        res.send("Deleted Successfully")
    } catch (err) {
        res.log(err)
    }
})
module.exports = router