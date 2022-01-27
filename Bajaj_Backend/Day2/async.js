const fs = require("fs")
fs.readFile('./sample.txt', "utf-8", (err, data) => {
    if (err) {
        console.log(err.code)
        if (err.code) {
            console.log("no such file or directory")
        }
    }
    setTimeout(() => console.log(data), 2000)
})

fs.readFile('./smaple2.txt', "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})