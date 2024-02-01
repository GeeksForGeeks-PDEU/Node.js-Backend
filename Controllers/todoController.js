const {default: mongoose} = require('mongoose')
const express = require('express')

const Todo = require('../Models/todoModels')

const getTodo = async (req, res) => {
    const todo = await Todo.find({}).sort({ createdAt: -1})

    return res.status(200).json(todo)
}

const getSingleTodo =  async (req,res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({Error: 'Not a vlaid DB id.'})
    }

    const todo = await Todo.findById(id)

    if(!todo)
    {
        return res.status(404).json({Error: 'No such Todo available'})
    }

    res.status(200).json(todo)
}

const addTodo = async (req,res) => {
    const {Title, Description, Date, IsCompleted} = req.body 

    try{
        const todo = await Todo.create({Title, Description, Date, IsCompleted})
        res.status(201).json(todo)
    }
    catch(error) {
        return res.status(400).json("error")
    }
}

const updateTodo = async (req,res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({Error: 'Not a vlaid DB id.'})
    }

    const todo = await Todo.findOneAndUpdate({_id: id}, req.body, {
        runValidators: true,
        new: true
    })

    if(!todo)
    {
        return res.status(404).json({Error: 'No such Todo available'})
    }

    res.status(200).json(todo)
}

const deleteTodo = async (req,res) => {
    const { id } = req.params 

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(400).json({Error: 'Not a vlaid DB id.'})
    }

    const todo = await Todo.findOneAndDelete({_id: id})

    if(!todo)
    {
        return res.status(404).json({Error: 'No such Todo available'})
    }

    res.status(200).json(todo)
}

module.exports = {
    getTodo,
    getSingleTodo,
    addTodo,
    updateTodo,
    deleteTodo
}