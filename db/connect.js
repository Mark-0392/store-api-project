const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.createConnection(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB
