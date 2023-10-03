const studentSchema = require('../models/student')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const login = async (req, res) => {
    const username = req.body.username
    const password = req.body.password

    try {
        const result = await studentSchema.findOne({ username })

        if (result && (await bcrypt.compare(password, result.password))) {
            return res.json({
                _id: result.id,
                firstName: result.firstName,
                username: result.username,
                token: generateToken(result._id)
            })
        }

        res.status(401).json(message = "Login details incorrect")


    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const register = async (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const username = req.body.username
    const password = req.body.password

    try {

        const emailCheck = await studentSchema.findOne({ username })

        if (emailCheck) {
            return res.status(401).json(message = "user account already exists")
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const result = await studentSchema.create({ firstName, lastName, username, password: hashedPassword })
        res.json(result)
    }
    catch (error) {
        res.status(401).json(message = error.message)
    }
}

const landing = async (req, res) => {

    // const token = req.body.token
    const student = req.body.student

    //to show _id
    const id = student.split('"')[3]

    //to show username
    const username = student.split('"')[11]

    //to show token
    const token = student.split('"')[15]

    // console.log({id, username, token})

    // res.send(student)

    try {
        const result = await studentSchema.findOne({_id: id})
        res.json({
            _id: result.id,
            firstName: result.firstName,
            lastName: result.lastName,
            username: result.username,
            token: result.token
        })
        
    } catch (error) {
        
    }

    // res.json(token)



    // const result = req.headers.authorization

}


const editProfile = async (req, res) => {
    const firstName = req.body.firstName
    const lastName = req.body.lastName
    const student = req.body.student
    const id = student.split('"')[3]

    try {

        const result = await studentSchema.findByIdAndUpdate({_id: id}, {firstName, lastName })
        res.json(result)
    }
    catch (error) {
        res.status(401).json(message = error.message)
    }
}

const education = async (req, res) => {

    // const token = req.body.token
    const student = req.body.student

    //to show _id
    const id = student.split('"')[3]

    //to show username
    const username = student.split('"')[11]

    //to show token
    const token = student.split('"')[15]

    try {
        const result = await studentSchema.findOne({_id: id})
        res.json({
            _id: result.id,
            highestDegree: result.highestDegree,
            schoolName: result.schoolName,
            schoolAddress: result.schoolAddress,
            token: result.token
        })
        
    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const editEducation = async (req, res) => {
    const highestDegree = req.body.highestDegree
    const schoolName = req.body.schoolName
    const schoolAddress = req.body.schoolAddress
    const student = req.body.student
    const id = student.split('"')[3]

    try {

        // const emailCheck = await studentSchema.findOne({ username })

        // if (emailCheck) {
        //     return res.status(401).json(message = "user account already exists")
        // }

        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword = await bcrypt.hash(password, salt)

        const result = await studentSchema.findByIdAndUpdate({_id: id}, {highestDegree, schoolName, schoolAddress })
        res.json(result)
    }
    catch (error) {
        res.status(401).json(message = error.message)
    }
}

const work = async (req, res) => {

    // const token = req.body.token
    const student = req.body.student

    //to show _id
    const id = student.split('"')[3]

    //to show username
    const username = student.split('"')[11]

    //to show token
    const token = student.split('"')[15]

    try {
        const result = await studentSchema.findOne({_id: id})
        res.json({
            _id: result.id,
            experienceLevel: result.experienceLevel,
            jobTitle: result.jobTitle,
            companyName: result.companyName,
            jobProfile: result.jobProfile,
            skills: result.skills,
            token: result.token
        })
        
    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const editWork = async (req, res) => {
    const experienceLevel = req.body.experienceLevel
    const jobTitle = req.body.jobTitle
    const companyName = req.body.companyName
    const jobProfile = req.body.jobProfile
    const skills = req.body.skills
    const student = req.body.student
    const id = student.split('"')[3]

    try {

        const result = await studentSchema.findByIdAndUpdate({_id: id}, {experienceLevel, jobTitle, companyName, jobProfile, skills })
        res.json(result)
    }
    catch (error) {
        res.status(401).json(message = error.message)
    }
}

const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    login,
    register,
    landing,
    editProfile,
    education,
    editEducation,
    work,
    editWork
}