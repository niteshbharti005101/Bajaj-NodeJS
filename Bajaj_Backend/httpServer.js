const http = require("http")
const url = require("url")
const app = http.createServer((req, res) => {
    //console.log(req)
    const querydata = url.parse(req.url, true)
    console.log(querydata.pathname)

    //console.log(typeof querydata.pathname)
    console.log(querydata.query)
    res.writeHead(200, { "Content-Type": "text/html" })

    if (querydata.query.search === "redmi" && Number(querydata.query.price) === 12000) {
        res.write("<h2>Redmi note pro</h2>")
        res.end()
    }

    /*if (querydata.pathname === "/products") {
        //res.writeHead(200, { "Content-Type": text / html })
        res.write("<h1>Product Page</h1>")
        res.end()
    } else if (querydata.pathname === "/checkout") {
        res.write("<h3>CheckOut</h3>")
        res.end()
    }*/


    //res.write("<h1>request received</h1>")
    //res.end()
})
app.listen(3000, () => console.log("Server started in port: 3000"))