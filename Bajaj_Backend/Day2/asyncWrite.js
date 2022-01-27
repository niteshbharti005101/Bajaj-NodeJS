const fs = require("fs")
const data = "Read and write using sunc and async"
fs.writeFile("./writeAsync.txt", data, (err) => {
    if (err) {
        console.log(err)
    }
    //console.log(result)
})