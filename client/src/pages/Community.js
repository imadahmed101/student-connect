import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const baseURL = 'http://localhost:5000/post'

const Community = () => {

  const [posts, setPosts] = useState([])
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const id = localStorage.getItem('id')

  useEffect(() => {
    if (!token) {
      return navigate('/login')
    }

    axios.get(baseURL)
      .then((response) => {
        setPosts(response.data)
      })
      .catch((error) => {
        alert(error.response.data)
      })
  }, [token, navigate])

  const deletePost = ({postId, postCreator}) => {

    if(postCreator !== id){
      return alert('Error, can only delete your own post.')
    }

    axios.delete(baseURL + '/' + postId)
      .then((response) => {
        alert('Post Deleted')
        window.location.reload()
      })
      .catch((error) => {
        alert(error.response.data)
      })

  }

  return (
    <div className='py-16'>

    <div className='w-[1000px] mx-auto'>
      <h1 className='mb-4'>
        Community
      </h1>
      <Link to={'/createpost'} className='bg-green-600 text-white px-2 py-1'>Add Post</Link>

      <table className='mt-2 overflow-x-clip'>
        <thead>
          <tr>
            <td className='p-4 border-2 border-gray-500'>Title</td>
            <td className='p-4 border-2 border-gray-500'>Question</td>
            <td className='p-4 border-2 border-gray-500'>User</td>
            <td className='p-4 border-2 border-gray-500'>Actions</td>
          </tr>
        </thead>
        <tbody>

          {posts.map((post) => {
            return (
              <tr key={post._id} className='my-4'>
                <td className='p-4 border-[1px] border-gray-500'>
                  <Link to={`/post/${post._id}`} className='text-blue-500'>
                    {post.title}
                  </Link>
                </td>
                <td className='p-4 border-[1px] border-gray-500'>{post.question}</td>
                {/* <td className='p-4 border-[1px] border-gray-500'>{post.creator}</td> */}
                <td className='p-4 border-[1px] border-gray-500'>{post.username}</td>
                <td className='p-4 border-[1px] border-gray-500'><button className='text-red-600' onClick={() => { deletePost({postId: post._id, postCreator: post.creator}) }}>Delete</button></td>
              </tr>
            )
          })
          }
        </tbody>
      </table>
      </div>

    </div>

  )
}

export default Community