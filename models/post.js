const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    creator: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Student',
        type: String,
        required: true
    },
    username: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Student',
        type: String,
        required: true
    }
},
{timestamps: true,
})

module.exports = mongoose.model('Post', postSchema)