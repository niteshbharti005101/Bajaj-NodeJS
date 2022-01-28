const fs = require("fs")
const writePointer = fs.createWriteStream("./writefile.txt")
writePointer.write("Create data", "utf-8")
writePointer.end()
writePointer.on("finish", () => {
    console.log("finish")
})
writePointer.on("error", (err) => {
    console.log(err)
})