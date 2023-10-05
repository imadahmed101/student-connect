const express = require('express')
const app = express()
app.use(express.json())
const env = require('dotenv/config')
const mongoose = require('mongoose')
const cors = require('cors')

const studentRoute = require('./routes/student')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')

const PORT = process.env.PORT || 80
// const PORT = process.env.PORT
const DBCONNECTION = process.env.DBCONNECTION

app.use(cors())
app.use('/', (studentRoute))
app.use('/post', (postRoute))
app.use('/comment', (commentRoute))

mongoose.connect(DBCONNECTION)
.then(() => {app.listen((PORT), console.log (`Server running on port ${PORT}`))})
.catch((error) => console.log(error.message))