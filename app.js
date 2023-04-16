const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect.js')
require('dotenv').config()





//middleware

app.use(express.json())
app.use(express.static('./public'))


//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App!')
})

app.use('/api/v1/tasks', tasks)

const port = 3000


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => {console.log('Server is up on port ' + port)})
        } catch (error) {
        console.log(error)
    }
}

start()
        




app.use('api/v1/tasks',tasks) 