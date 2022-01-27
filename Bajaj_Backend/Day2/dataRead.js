const fs = require("fs")
const path = require("path")
const f1 = path.join("../module1.js")
const f2 = path.join("../data.json")
const f3 = path.join("C:/Users/nites/Desktop/Bajaj_Node/index.html")
const f4 = path.join("./OS properties.txt")
const f5 = path.join("../node_modules/nodemon/README.md")
console.log(f1)
console.log(f2)
console.log(f3)
console.log(f4)
console.log(f5)
const d1 = fs.readFileSync(f1, 'utf-8')
const d2 = fs.readFileSync(f2, 'utf-8')
const d3 = fs.readFileSync(f3, 'utf-8')
const d4 = fs.readFileSync(f4, 'utf-8')
const d5 = fs.readFileSync(f5, 'utf-8')
setTimeout(() => console.log(d1), 2000)

console.log(d2)
console.log(d4)
console.log(d5)
console.log(d3)



//merge two files
fs.writeFileSync("Merge.txt", d1 + "\n\n\n\n" + d2 + "\n")