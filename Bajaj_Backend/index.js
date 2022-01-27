const test1 = () => {
    const age = "14"
    if (age !== "13") {
        console.log("executed")
    } else {
        {
            console.log("not executed")
        }
        //common js convention to import and export
    }
}

const members = [{
        memberName: "john",
        memberID: "john123"
    },
    {
        memberName: "smith",
        memberID: "smith678"
    },
]

const res = members.map((item) => {
    if (item.memberName === "john")
        return item
    else
        return null
})

const test3 = () => {
    console.log("hello")
}
const test2 = () => {
    console.log("Secret")
        //common js convention to import and export
}

const test4 = (fname, memID) => {
    console.log(`Username: ${fname} MemberID: ${memID}`)
}

module.exports = { test1, test3, members, res, test4 }


//console.log(module.exports)
//export default { test1, test3 }