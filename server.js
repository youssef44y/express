const express = require('express')
const port = 5000
//init app
const app = express()
const checkTime = require("./middleware");


app.use(express.static("view"))
app.use(checkTime)




console.log(app)

app.get("/", (req,res) =>{
    res.status(200).sendFile(__dirname + "/view/home.html")
})

app.get("/oursevices", (req,res) =>{
    res.status(200).sendFile(__dirname + "/view/ourServices.html")
})


app.get("/contact", (req,res) =>{
    res.status(200).sendFile(__dirname + "/view/contactUs.html")
})


//create server
app.listen(port,(err) => err ? console.log("error: err") :
 console.log("server is running on port :",port))

