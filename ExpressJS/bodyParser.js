//body parser is a middle-ware

const express = require("express")
const bodyparser = require("body-parser")
const app = express()
app.use(bodyparser.json())
const loggerMw = (req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    next()
};

/*app.get("/home", (req, res, next) => {
    console.log(req.method)
    console.log(req.url)
    console.log(new Date().toDateString())
    next()
}, (req, res) => {
    res.status(200).send("home")
})*/

app.get("/home", loggerMw, (req, res) => {
    res.status(200).send("home")
})
app.post("/products", (req, res) => {
    console.log(req.body)
    res.send("success")
})
app.post("/updatepassword", (req, res) => {
    console.log(req.body)
    res.send("Password Changed")
})
app.listen(3001, () => {
    console.log("Server started on Port 3001")
})