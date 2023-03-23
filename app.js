// const express = require("express")
// const _ = require("lodash")
// const app = express()
// const mongoose = require("mongoose")
// app.set("view engine", "ejs")

// const url = "mongodb+srv://NewUser:12345@cluster0.yoqqt.mongodb.net/instaDB"

// mongoose
//   .connect(url)
//   .then((res) => {
//     console.log("connencted succesfully")
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// const historySchema = new mongoose.Schema({
//   username: String,
//   password: String
// })

// //our data will be stored using below model
// const History = new mongoose.model("History", historySchema)

// const user1 = new History({ username: "sahil", password: "xyz" })

// // List.insertMany([item1, item2, item3], (err, result) => {
// //   if (err) {
// //     console.log(err)
// //   } else {
// //     console.log("added successfully!")
// //   }
// // })

// app.use(express.urlencoded({ extended: true }))
// app.use(express.static("public"))

// app.get("/", (req, res) => {
//   user1.save();
//   res.render("list", { listtitle: "bansi", newItem: ["sahil", "patil", "john"], name: "sahil" })

// })

// app.post("/", (req, res) => {
//   const username = req.body.username
//   const password = req.body.password
//   const newUser = new History({
//     username,
//     password
//   }).save();
//   res.render("list")

// })

// app.listen(process.env.PORT, () => {
//   console.log("server is listening on port 3000")
// })
let express = require('express');
let dotenv = require("dotenv")
let mongoose = require("mongoose");
const app = express();
let path = require("path")
dotenv.config({
  path: "./config.env"
})

const url = "mongodb+srv://NewUser:12345@cluster0.yoqqt.mongodb.net/instaDB"

mongoose
  .connect(url)
  .then((res) => {
    console.log("connencted succesfully")
  })
  .catch((err) => {
    console.log(err)
  })

const historySchema = new mongoose.Schema({
  username: String,
  password: String
})

//our data will be stored using below model
const History = new mongoose.model("History", historySchema)
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {

  return res.sendFile(path.join(__dirname + "/index.html"))

})

app.post("/", (req, res) => {
  const username = req.body.username
  const password = req.body.password
  // const newUser = new History({
  //   username,
  //   password
  // }).save();
  // return res.sendFile(path.join(__dirname + "/index.html"))
  return res.json({
    username,
    password
  })

})

app.listen(3000);