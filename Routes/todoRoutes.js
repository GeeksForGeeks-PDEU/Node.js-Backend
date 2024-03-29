const express = require('express')

const {
    getTodo,
    getSingleTodo,
    addTodo,
    updateTodo,
    deleteTodo
} = require('../Controllers/todoController')

const router = express.Router()

router.get('/', getTodo)

router.get('/:id', getSingleTodo)

router.post('/', addTodo)

router.patch('/:id', updateTodo)

router.delete('/:id', deleteTodo)

module.exports = router