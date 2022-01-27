const os = require("os")
const fs = require("fs")
fs.writeFileSync("OS properties.txt", os.uptime() + "\n" + os.type() + "\n" + os.release() + "\n" + os.totalmem() + "\n" + os.freemem() + "\n" + os.userInfo() + "\n" + os.version() + "\n")

// console.log(__dirname)
// console.log(__filename)
// const path = require("path")
// console.log(path)

// const filepath = path.join("../index.js")
// console.log(filepath)
// const abspath = path.resolve(__dirname, "data.json")
// console.log(abspath)