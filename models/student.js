const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    highestDegree: {
        type: String,
        required: false
    },
    schoolName: {
        type: String,
        required: false
    },
    schoolAddress: {
        type: String,
        required: false
    },
    experienceLevel: {
        type: String,
        required: false
    },
    jobTitle: {
        type: String,
        required: false
    },
    companyName: {
        type: String,
        required: false
    },
    jobProfile: {
        type: String,
        required: false
    },
    skills: {
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Student', studentSchema)