const express = require("express")
const res = require("express/lib/response")
const app = express()
    //queryData params
app.get("/home/products", (req, res) => {
    console.log(req)
        //res.send("Home page")
        //res.send({ prname: "xyz", price: "12000" })
    console.log(req.query)
    const queryData = req.query
    if (queryData.prname) {
        res.send("<h1>Products Fetched</h1>")
    }

})
app.get("/home", (req, res) => {
    res.send("second file")
})
app.get("/products/productsearch", (req, res) => {
    console.log(req.query)
    res.status(200).send("Two Level")
})
app.post("/products", (req, res) => {
    console.log(req.body)
    res.send("success")
})

//params
app.get("/products/:prname/:price", (req, res) => {
    console.log(req.params)
    res.send("Products")
})
app.all("*", (req, res) => {
    res.status(404).send("File not found")
})
app.listen(3001, () => {
    console.log("Server started on Port 3001")
})