const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    // res.send('all items are here(controller task.js)')

    try{
      const tasks = await Task.find({})
      res.status(200).json({tasks})

    }catch{(e)=>[console.log(e)]
        res.status(500).json({msg:e})
    }
}

const createTask = async (req, res) => {
try{ 

    const tasks = await Task.create(req.body)
    res.status(201).json({tasks:tasks })
}
catch(err){
    res.status(500).json({msg:err})
}}
const getTask = async (req, res) => {   

    try{
        const task = await Task.findById({_id: req.params.id})
        if(!task){
            return res.status(404).json({msg:'task not found with the Task ID: ', id:req.params.id })
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }

    // res.json({id:req.params.id})
}

const deleteTask = async (req, res) => {
    
    try{
        const task = await Task.findOneAndDelete({_id: req.params.id})
        if(!task){
            return res.status(404).json({msg:'task not found with the Task ID: ', id:req.params.id })
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }  
    
    
}

const updateTask = (async (req, res, next) => {
    const { id: taskID } = req.params
  
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    })
  
    if (!task) {
      return next(createCustomError(`No task with id : ${taskID}`, 404))
    }
  
    res.status(200).json({ task })
  })

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask }