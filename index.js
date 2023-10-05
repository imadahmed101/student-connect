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
const DBCONNECTION = process.env.DBCONNECTION

app.use(cors())
app.use('/', (studentRoute))
app.use('/post', (postRoute))
app.use('/comment', (commentRoute))

mongoose.connect(DBCONNECTION)
.then(() => {app.listen((PORT), console.log (`Server running on port ${PORT}`))})
.catch((error) => console.log(error.message))

// const express = require('express')
// const app = express()
// const port = process.env.PORT || 80

// app.get('/', (req, res) => {
//     res.send('YESSIR')
// })

// app.listen(port, () => {
//     console.log('server running')
// })