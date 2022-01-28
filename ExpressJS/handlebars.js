const express = require("express")
const app = express()
app.set("view engine", "hbs")
app.get("/home", (req, res) => {

    //res.render("index")
    res.status(200).render("home", { username: "Peter" })
})
app.listen(3003, () => {
    console.log("Server started on Port 3003")
})