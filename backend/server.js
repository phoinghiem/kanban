// Keeps PORT request private for security purposes
require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const taskRoutes = require('./routes/tasks')

// Express app
const app = express()

// Middleware ==> logs path and HTTP method of each incoming request to server.
// any request that send to the serve ==> will attach to the object
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    // callback function to pass control to next middleware
    next()
})

// Route handler
app.use('/api/task',taskRoutes)

// Connects to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening port for request 
        app.listen(process.env.PORT, () => {
            console.log("Connected to MongoDB & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log('error')
    })


