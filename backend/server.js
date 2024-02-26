// Keeps PORT request private for security purposes
require('dotenv').config()

const express = require('express')

// Express app
const app = express()

// Middleware ==> logs path and HTTP method of each incoming request to server.
app.use((req, res, next) => {
    console.log(req.path, req.method)
    // callback function to pass control to next middleware
    next()
})

// Route handler
app.get("/", (req, res) => {
    res.json({mssg: "Welcome to Kanban!"})
})

// Listening port for request 
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})
