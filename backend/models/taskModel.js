const mongoose = require('mongoose')

const Schema = mongoose.Schema

//Schema defines the structure of the model (how data should be stored or accessed in the DB)
// New task Schema object
const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('task', taskSchema)
