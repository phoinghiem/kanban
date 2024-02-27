// Keeps PORT request private for security purposes
require('dotenv').config()

const express = require('express')
const taskRoutes = require('./routes/task')

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

// Listening port for request 
app.listen(process.env.PORT, () => {
    console.log("Listening on port", process.env.PORT)
})
