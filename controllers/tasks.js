const getAllTasks = async (req, res) => {
    res.send('all items are here(controller task.js)')
}

const createTask = async (req, res) => {
    res.json(req.body)
}
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