const { members } = require("./memberData")
const { test3 } = require("./indexTest")
members.map((item) => test3(item.memberName, item.memberID))