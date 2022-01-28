const express = require("express")
const app = express()
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://nitesh5101:root@cluster0.cno2i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
const user = mongoose.model("publications", {
    email: {
        type: String,
        unique: true,
        required: [true, "Please enter the email"],
    },
    userName: {
        type: String,
        minlength: [5, "please enter at least 5 characters"],
        maxlength: 15
    },
    interest: {
        type: [String],
        enum: ["react", "node", "express"],
        require: true
    }
})
const user1 = new user({
    email: "test123@gmail.com",
    userName: "test12",
    interest: ["node"]
})
user1.save().then(() => console.log("User added successfully!!!"))