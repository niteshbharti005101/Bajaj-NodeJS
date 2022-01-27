/*onsole.log("start")
setTimeout(() => console.log("timeout 1"), 2000)
setTimeout(() => console.log("timeout 2"), 0)
console.log("finish")
//node API
//callback queue //event loop*/

// os module path module fs module
const os = require("os")
console.log(os.uptime())
console.log(os.type())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())

console.log(__dirname)
console.log(__filename)
const path = require("path")
console.log(path)

const filepath = path.join("../index.js")
console.log(filepath)
const abspath = path.resolve(__dirname, "data.json")
console.log(abspath)