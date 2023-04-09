const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    res.send('all items are here(controller task.js)')
}

const createTask = async (req, res) => {
try{ 

    const task = await Task.create(req.body)
    res.status(201).json({task})
}
catch(err){
    res.status(400).json({msg:err})
}}
const getTask = async (req, res) => {
    res.json({id:req.params.id})
}
const updateTask = async (req, res) => {
    res.send('update task')
}
const deleteTask = async (req, res) => {
    res.send('delete task')
}

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }