const express = require("express")
const app = express()

//by default it will look for views folder
//It will work only with the jade files
app.set("view engine", "jade")
app.get("/index", (req, res) => {

    //res.render("index")
    res.status(200).render("index", { heading: "Index Page" })
})
app.listen(3003, () => {
    console.log("Server started on Port 3003")
})