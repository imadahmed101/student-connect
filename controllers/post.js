const postSchema = require('../models/post')

const addPost = async (req, res) => {
    const title = req.body.title
    const question = req.body.question
    const creator = req.body.creator
    const username = req.body.username

    try {
        const result = await postSchema.create({ title, question, creator, username })
        res.json(result)
    }
    catch (error) {
        res.status(401).json(message = error.message)
    }
}

const getPost = async (req, res) => {
    try {
        const result = await postSchema.find({})
        res.json(result)
    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const getSinglePost = async (req, res) => {
    const postID = req.params.id
    try {
        const result = await postSchema.findOne({_id: postID})
        res.json(result)
    } catch (error) {
        res.status(401).json(message = error.message)
    }
}

const updatePost = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const deletePost = async (req, res) => {
    const postID = req.params.id
    try {
        const result = await postSchema.findOneAndDelete({_id: postID})
        res.json(result)
        
    } catch (error) {
        res.status(401).json(message = error.message)
        
    }
}

module.exports = {
    getPost,
    getSinglePost,
    addPost,
    updatePost,
    deletePost
}