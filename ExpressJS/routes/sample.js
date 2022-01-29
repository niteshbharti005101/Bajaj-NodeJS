//Using express routers
const express = require("express")
const router = express.Router()
router.get("/home/products", (req, res) => {
    console.log(req.query)
    const queryData = req.query
    if (queryData.prname) {
        res.send("products fetched")
    }
    res.send("Products")
})

router.get("/home", (req, res) => {
    res.status(200).send("home")
})
module.exports = router