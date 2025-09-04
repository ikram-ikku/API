const express = require('express')
require('dotenv').config({path: '.env.development'})
const db = require('./Config/db.js')
const  testRoute = require('./Routes/testRoute')

const app = express()


app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use('/api/emps', testRoute)
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
