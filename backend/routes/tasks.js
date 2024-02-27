const express = require('express')
const Task = require('../models/taskModel')

const router = express.Router()


// Creating different routes for each action
// GET all tasks
router.get("/", (req, res) => {
    res.json({mssg: "GET all tasks"})
})

// GET single task (route parameter ==> "/:id")
router.get("/:id", (req, res) => {
    res.json({mssg: "GET a single task"})
})

// POST new task
router.post("/", async (req, res) => {
    const {title, reps, load} = req.body
    try {
        const task = await Task.create({title, reps, load})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
    //res.json({mssg: "POST a new single task"})
})

// DELETE new task
router.delete("/:id", (req, res) => {
    res.json({mssg: "DELETE a new single task"})
})

// UPDATE new task
router.patch("/:id", (req, res) => {
    res.json({mssg: "UPDATE a single task"})
})

//Exporting route at the end
module.exports = router