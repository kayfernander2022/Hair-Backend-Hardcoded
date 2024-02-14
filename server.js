//NO database connection here. We are just creating a backend that is returning json dummy data.
/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require('express')//import express
const app = express()//create app object.
require('dotenv').config()//get .env variables
const {PORT = 3030, DATABASE_URL}=process.env

/////////////////////////
// MIDDLEWARE IMPORT
/////////////////////////
const cors= require("cors")

/////////////////////////
// USE MIDDLEWARE
/////////////////////////
app.use(express.json())
app.use(cors())


/////////////////////////
// MODEL
/////////////////////////
const bundles = [
    {id:0, name: "Indian Curly", description: "Soft and luscious. No shedding, no tangling"},
    {id:1, name: "Indian Straight", description: "Our Indian straight hair has predominately straight cuticles. This hair is ideal for the woman who prefers silky smooth tresses at all times."},
    {id:2, name: "Indian Wavy", description: "It has a natural loose body wave which allows great versatility & body when styling."},
    {id:3, name: "Brazilian Curly", description: "Our Brazilian curly pattern is great for achieving a voluminous look." },
    {id:4, name: "Brazilian Wavy", description: "Soft and sleek. Durable with no tangling"}
]

/////////////////////////
// Routes //CRUD
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
  //res.json let's us send a response as JSON data and not just text with res.send.
  res.json({
      response: "Hello World"
  })
  //OR
  //res.send('Hello World')
});

// Hair Index Route (Send All hair bundles)
app.get("/bundle", (req, res) => {
// send the bundles array as JSON
res.json(bundles)
})

// Hair Show Route (Send One hair bundle sample)
app.get("/bundle/:index", (req, res) => {
// send one bundle per index location as json
res.json(bundles[req.params.index])
})


// Hair Create Route (Created a bundle sample and add to bundles array)
app.post("/bundle", (req, res) => {
// push the request body into the array
bundles.push(req.body)
// send the bundles array as JSON
res.json(bundles)
})

// Bundle Update Route
app.put("/bundle/:index", (req, res) => {
// replace the hair at the specified index with the request body
bundles[req.params.index] = req.body
// send the bundles array as JSON
res.json(bundles)
})


// Hair Delete Route
app.delete("/bundle/:index", (req, res) => {
// remove the bundle at the specifed index
bundles.splice(req.params.index, 1)
// send the bundles array as JSON
res.json(bundles)
})



/////////////////////////
// Listener
/////////////////////////
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))