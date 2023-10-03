const express = require('express')
const router = express.Router()

const {
    getPost,
    getSinglePost,
    addPost,
    updatePost,
    deletePost
} = require('../controllers/post')

router.get('/', getPost)
router.get('/:id', getSinglePost)

router.post('/', addPost)


router.post('/:id', updatePost)

router.delete('/:id', deletePost)


module.exports = router