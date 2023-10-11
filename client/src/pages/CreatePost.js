import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import baseURL from '../baseURL'

const CreatePost = () => {

    const [title, setTitle] = useState('')
    const [question, setQuestion] = useState('')
    const [creator, setCreator] = useState(localStorage.getItem('id'))
    const [username, setUsername] = useState(localStorage.getItem('username'))

    const navigate = useNavigate()

    const formSubmit = (e) => {
        e.preventDefault()
        
        if ( !title || !question ) {
          return alert('Please fill out all fields.')
        }
    
        axios.post(`${baseURL}/post`, {
          title,
          question,
          creator,
          username
        })
        .then((response) => {
          alert('New post created')
          navigate('/community')
        })
        .catch((error) => {
          alert(error.response.data)
        })
      }

  return (
    <div className='max-w-[400px] mx-auto p-2 mt-20'>
      <h2 className='text-center mb-2 text-xl'>Create Post</h2>
      <form className='flex flex-col mb-4'>
        
        <label className='mb-1'>Title:</label>
        <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='How To Register?'></input>
        
        <label className='mb-1'>Question:</label>
        <input 
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='How do you register for an acc...'></input>
        
        <input onClick={formSubmit} type='submit' value='Create' className='bg-blue-500 text-white p-2 rounded-md'/>
      </form>

    </div>
  )
}

export default CreatePost