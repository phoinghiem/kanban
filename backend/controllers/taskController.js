const Task = require('../models/taskModel')
const mongoose = require('mongoose')

// GET all tasks
const getTasks = async (req, res) => {
    // find the latest results
    const tasks = await Task.find({}).sort({createdAt: -1})

    res.status(200).json(tasks)
}
// GET a new task

const getTask = async (req, res) => {
    const { id } = req.params

    // checks if ID is valid and if it is not then if statement will return a 404 error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "no such task exist"})
    }

    const task = await Task.findById(id)
    //if task is not found then return error but if found then return status 200 = good
    if (!task) {
        return res.status(400).json({error: "no such task exist"})
    }

    res.status(200).json(task)
   
}


// CREATE a new task
const createTask = async (req, res) => {
    const {title, reps, load} = req.body

    // add dot to DB
    try {
        const task = await Task.create({title, reps, load})
        res.status(200).json(task)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// DELETE a task 

const deleteTask = async (req, res) => {
    const { id } = req.params

    // checks if ID is valid and if it is not then if statement will return a 404 error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "no such task exist"})
    }

    const task = await Task.findOneAndDelete({_id: id})

    //if task is not found then return error but if found then return status 200 = good
    if (!task) {
        return res.status(400).json({error: "no such task exist"})
    }

    res.status(200).json(task)
}


// UPDATE a task

const updateTask = async (req, res) => {
    const { id } = req.params

    // checks if ID is valid and if it is not then if statement will return a 404 error
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: "no such task exist"})
    }

    const task = await Task.findOneAndUpdate({_id: id}, { ...req.body})

    //if task is not found then return error but if found then return status 200 = good
    if (!task) {
        return res.status(400).json({error: "no such task exist"})
    }

    res.status(200).json(task)
}



module.exports = {
    getTasks,
    getTask,
    createTask,
    deleteTask,
    updateTask
}