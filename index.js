/*console.log("Test")
const a = 12.23
let b = 23.5
    //a = a + 10
b = b + 10
let c = `String ${a}`
let prno = "23"
console.log(a)
console.log(b)
console.log(c)
    // console.log(typeof a)
    // console.log(typeof(a))
    // console.log(typeof Number(prno))
    // console.log(typeof String(a))
    // const res = String(a)
    // console.log(res)
    // console.log(typeof res)

let arr = [20, 30, "output"]
console.log(arr)*/

let obj = [{
        prname: "XYZ",
        prprice: 2300002,
        license: "license MIT"
    },
    {
        prname: "abc",
        prprice: 23000034,
        license: "license MIt 1.0"
    },
    {
        prname: "ABC",
        prprice: 230000345,
        license: "license MIt 2.0"
    }
]
obj.map((i) => { console.log(i) })
obj.map((item) => {
    if (item.license != "license MIt 2.0") {
        console.log(item.prname)
        console.log(item.license)
    }
})

//find,filter,transform,push,pop,shift,unshift
//prototype


// for (let i = 0; i < obj.length; i++) {
//     console.log(obj[i].prname)
// }