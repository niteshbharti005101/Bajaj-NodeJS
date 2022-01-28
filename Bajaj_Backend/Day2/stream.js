const fs = require("fs")
const readerPointer = fs.createReadStream("./sample.txt")
    //console.log(readerPointer)
let data = ""
    //data, end, err
readerPointer.on("data", (chunk) => {
    console.log("chunk", chunk.toString())
    data += chunk
})
readerPointer.on("end", () => {
    console.log("data", data)
})
readerPointer.on("error", (err) => {
    console.log("error", err)

})