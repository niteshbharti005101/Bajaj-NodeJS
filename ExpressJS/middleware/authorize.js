const jwt = require("jsonwebtoken")
const user = require("../models/UserModel")
async function authorize(req, res, next) {
    try {
        const authheader = req.headers["authorization"]
        const token = authheader.replace("Bearer ", "")
        console.log(token)
        const decodedtoken = jwt.verify(token, "jamesbond")
        console.log(decodedtoken)
        const user = await user.findOne({ email: decodedtoken.email })
        req.user = user
        next()
    } catch (err) {
        res.send(err)
    }
}
module.exports = authorize