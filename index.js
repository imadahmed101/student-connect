const express = require('express')
const app =  express()
const path = require('path')
const env = require('dotenv/config')
const port = process.env.PORT
const DBCONNECTION = process.env.DBCONNECTION

const mongoose = require('mongoose')
const cors = require('cors')

app.use(express.static('client/build'));
app.use(express.json());

app.use(cors({
    origin: "https://studentconnect.azurewebsites.net/"
}))

mongoose.connect(DBCONNECTION, { useNewUrlParser: true });

const studentRoute = require('./routes/student')
const postRoute = require('./routes/post')
const commentRoute = require('./routes/comment')
app.use('/api/', (studentRoute))
app.use('/api/post', (postRoute))
app.use('/api/comment', (commentRoute))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
});

app.listen(port, () => {
    console.log(`Server is running on port: ${ port }`);
});