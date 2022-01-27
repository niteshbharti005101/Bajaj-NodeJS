//Common JS conventions
const functions = require("./index.js")
    //console.log(functions)
functions.test1()

//Common JS conventions
//Another way
const { test1, test3, members, res, test4 } = require("./index.js")
console.log(test1)
console.log(test3)
test1()
test3()
members.map((item) => console.log(item.memberID))
res.map(i => console.log(i))

members.map((item) => test4(item.memberName, item.memberID))

// //ES6 Covention for importing
// import { test1, test3 } from "./index.js"
// test1()
// test3()