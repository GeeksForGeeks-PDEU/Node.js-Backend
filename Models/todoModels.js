const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    Title: {
        type: String,
        required: true
    },
    Description: {
        type: String,
        required: false
    },
    Date: {
        type: Date,
        required: true
    },
    IsCompleted: {
        type: Boolean,
        required: true
    },
})

module.exports = mongoose.model('Todo', todoSchema)