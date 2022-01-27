const http = require("http")
const members = require("./data.json")
const { type } = require("os")
const url = require("url")
const app = http.createServer((req, res) => {
    const querydata = url.parse(req.url, true)
    console.log(querydata.query)
    res.writeHead(200, { "Content-Type": "text/html" })
    if (querydata.query.search === "json") {
        console.log(JSON.stringify({ "name": "Nitesh" }))
        res.write(JSON.stringify(members))
        res.end()
    }
})
app.listen(3000, () => console.log("Server started in port: 3000"))