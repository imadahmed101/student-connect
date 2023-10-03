const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true
    },
    question: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'Post',
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

module.exports = mongoose.model('Comment', commentSchema)