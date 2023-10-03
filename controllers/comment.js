const commentSchema = require('../models/comment')

const addComment = async (req, res) => {
    const comment = req.body.comment
    const question = req.body.question
    const creator = req.body.creator
    const username = req.body.username

    try {
        const result = await commentSchema.create({ comment, question, creator, username })
        res.json(result)
    }
    catch (error) {
        res.status(401).json(message = error.message)
    }
}

const getComment = async (req, res) => {
    try {
        const result = await commentSchema.find({})
        res.json(result)
    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const getSingleComment = async (req, res) => {
    const commentID = req.params.id
    try {
        const result = await commentSchema.findOne({_id: commentID})
        res.json(result)
    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const updateComment = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deleteComment = async (req, res) => {
    const commentID = req.params.id
    try {
        const result = await commentSchema.findOneAndDelete({_id: commentID})
        res.json(result)
        
    } catch (error) {
        res.status(401).json(message = error.message)
        
    }
}

module.exports = {
    getComment,
    getSingleComment,
    addComment,
    updateComment,
    deleteComment
}