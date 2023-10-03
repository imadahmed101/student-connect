const express = require('express')
const router = express.Router()

const {
    login,
    register,
    landing,
    editProfile,
    education,
    editEducation,
    work,
    editWork
    
} = require('../controllers/student')

router.post('/login', login)

router.post('/register', register)

router.post('/landing', landing)

router.post('/editprofile', editProfile)

router.post('/education', education)

router.post('/editeducation', editEducation)

router.post('/work', work)

router.post('/editwork', editWork)


module.exports = router