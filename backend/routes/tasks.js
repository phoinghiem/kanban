const express = require('express')
const Task = require('../models/taskModel')
const {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
} = require('../controllers/taskController')

const router = express.Router()


// Creating different routes for each action

// GET all tasks
router.get('/', getTasks)

// GET single task (route parameter ==> "/:id")
router.get('/:id', getTask)

// POST new task
router.post('/', createTask)

// DELETE new task
router.delete('/:id', deleteTask)

// UPDATE new task
router.patch('/:id', updateTask)

//Exporting route at the end
module.exports = router