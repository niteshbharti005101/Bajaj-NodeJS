//const buff = new Bugger("data")
const buff = new Buffer.alloc(50)
    //const buff = new Buffer(10)
buff.write("Some Data") // write
console.log(buff.toString()) // read

const buff2 = Buffer.from("new data", "utf-8")
console.log(buff2)
console.log(buff2.toString())