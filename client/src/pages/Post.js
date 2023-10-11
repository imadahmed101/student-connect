import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import baseURL from '../baseURL'

const Post = () => {

  const { postID } = useParams()
  const [post, setPost] = useState([])
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')
  const [question, setQuestion] = useState('')
  const [creator, setCreator] = useState(localStorage.getItem('id'))
  const [username, setUsername] = useState(localStorage.getItem('username'))

  const navigate = useNavigate()
  const token = localStorage.getItem('token')


  useEffect(() => {
    if (!token) {
      return navigate('/login')
    }

    axios.get(`${baseURL}/post/${postID}`)
      .then((response) => {
        setPost(response.data)
        setQuestion(response.data._id)
      })
      .catch((error) => {
        alert(error.response.data)
      })

    axios.get(`${baseURL}/comment`)
      .then((response) => {
        setComments(response.data)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }, [token, comment])

  const formSubmit = (e) => {
    e.preventDefault()

    if (!comment || !question || !creator || !username) {
      return alert('Comment can not be empty.')
    }

    axios.post(`${baseURL}/comment`, {
      comment,
      question,
      creator,
      username
    })
      .then((response) => {
        alert('New comment created')
        setComment('')
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }


  return (
    <div>
      <div className='max-w-[500px] mx-auto px-2'>

        <div className='p-4 my-4 bg-gray-300 rounded-md'>
          <p className='font-light text-gray-600 mb-4'>{post.createdAt}</p>
          <p className='text-4xl mb-2 font-semibold'>{post.title}</p>
          <p className='text-xl mb-8'>{post.question}</p>
          <p className='mr-2'>~ {post.username}</p>
        </div>

        <div>
          <form className='flex flex-col'>

            <label className='mb-1'>Comment:</label>
            <input
              value={comment}
              onChange={(event) => setComment(event.target.value)}
              className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='Enter Comment Here'></input>

            <input onClick={formSubmit} type='submit' value='Add Comment' className='bg-blue-500 text-white p-2 rounded-md' />
          </form>
        </div>
        <div className='my-4'>

          {comments.filter(comment => comment.question == question).map((cmmnt) => {
            return (
              <div key={cmmnt._id} >
                <div className='flex justify-between mb-2'>
                  <p className='text-gray-600 text-sm'>~{cmmnt.username}</p>
                  <p className='text-gray-600 text-sm'>{cmmnt.createdAt}</p>
                </div>
                <p className='mb-4 text-lg'>{cmmnt.comment}</p>
                <p className=' border-b-[1px] border-gray-300 mb-4'></p>
              </div>
            )
          })}
        </div>
        <Link to={'/community'} className='text-blue-500'>Back To Community Page</Link>
      </div>
    </div>
  )
}

export default Post