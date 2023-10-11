const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    creator: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }
    
},
{timestamps: true,
})

module.exports = mongoose.model('Comment', commentSchema)