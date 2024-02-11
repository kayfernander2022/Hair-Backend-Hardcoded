/////////////////////////
// DEPENDENCIES
/////////////////////////
const express = require('express')
const app = express()
require('dotenv').config()
const {PORT = 3030, DATABASE_URL}=process.env


/////////////////////////
// MIDDLEWARE
/////////////////////////

app.use(express.json())

const bundles = [
    {name: "Indian Curly", description: "Soft and Luscious"},
    {name: "Indian Straight", descriotion: "Soft and Luscious"},
    {name: "Brazilian Curly", descriotion: "Soft and Luscious"},
    {name: "Brazilian Wavy", descriotion: "Soft and Luscious"}
]
/////////////////////////
// Routes //CRUD
/////////////////////////

// home route that says "hello world" to test server is working
app.get("/", (req, res) => {
  //res.json let's us send a response as JSON data
  res.json({
      response: "Hello World"
  })
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
app.listen(3030, () => console.log("Listening on port 3030"))