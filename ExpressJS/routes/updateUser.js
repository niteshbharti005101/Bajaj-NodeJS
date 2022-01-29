const express = require("express")
const async = require("hbs/lib/async")
const router = express.Router()
const logger = require("../middleware/loggers")
const user = require("../models/UserModel")
router.post("/update", async(req, res) => {
    try {
        const data = req.body
        const result = await user.findByIdAndUpdate(data._id, { password: data.updated })

        // const res1 = await user.updateMany({ country: "India" })
        // console.log(res1)
        console.log(result)
        console.log("Updated Successfully")
        res.send("Updated Successfully")
    } catch (err) {
        res.log(err)
    }
})
module.exports = router