const fs = require("fs")
const path = require("path")
const filepath = path.join("../module1.js")
console.log(filepath)
const data = fs.readFileSync(filepath, 'utf-8')
console.log(data)

fs.writeFileSync("smaple2.txt", "new contents")