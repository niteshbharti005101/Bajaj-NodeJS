//render html pages from express, static rendering
const express = require('express');
const app = express();
const path = require('path');

app.get("/test", (req, res) => {
    res.send("<h1>Hello!! My name is Nitesh Bharti</h1><h3>This is a sample testing for html files</h3><p>This is a paragraph</p>")
})
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/Application/index.html'));
    //__dirname : It will resolve to your project folder.
});

//Synchronous scripting
const fs = require("fs")
const filepath = path.join("./Application/index.html")
const data = fs.readFileSync(filepath, 'utf-8')

// console.log(filepath)
// console.log(data)
app.get('/sync', (req, res) => {
    res.send(data);
});

app.listen(3002, () => {
    console.log("Server started on Port 3002")
})