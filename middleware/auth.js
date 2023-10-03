const jwt = require('jsonwebtoken')
const Student = require('../models/student')

const protect = (async (req, res, next) => {
    let token

    console.log(req.headers.authorization)
})