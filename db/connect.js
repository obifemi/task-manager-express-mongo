const mongoose = require('mongoose')
<<<<<<< HEAD
const connectionString = ''
=======
const connectionString = 'mongodb+srv://'
>>>>>>> 1dd15d9f491db4a2e236c71a9f05368629c594a8

const connectDB = (url) => {
       return mongoose.connect(url, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true })
     
    }


module.exports = connectDB
