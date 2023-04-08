const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://'

const connectDB = (url) => {
       return mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true })
     
    }


module.exports = connectDB
