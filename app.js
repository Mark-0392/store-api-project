require('dotenv').config()
const express = require('express')
require('express-async-errors')
const app = express()
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
// error handler
const notFoundMiddleware = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

// routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1> <a href="/api/v1/products">Products Route</a>')
})

app.use('/api/v1/products', productsRouter)

// product routes
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, console.log(`the server is listening on port ${port}`))
  } catch (error) {
    console.log(error)
  }
}

start()
