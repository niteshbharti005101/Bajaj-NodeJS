const app = require("express")()
const bodyparser = require("body-parser")
app.use(bodyparser.json())
const sampleRoutes = require("./routes/sample")
app.use("/sample", sampleRoutes)
const signup = require("./routes/createUser")
app.use("/", signup)
const findall = require("./routes/findUser")
app.use("/find", findall)
const update = require("./routes/updateUser")
app.use("/update", update)
const delete1 = require("./routes/deteUser")
app.use("/", delete1)
app.listen(3001, () => console.log("Server started on port 3001"))