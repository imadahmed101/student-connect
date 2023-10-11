import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {Context} from '../App'
import baseURL from '../baseURL'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [userName, setUserName] = useContext(Context)

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token){
      return navigate('/landing')
    }
  }, [])


  const formSubmit = (e) => {
    e.preventDefault()

    if(!username || !password){
      return alert ('Please fill in all fields')
    }

    axios.post(`${baseURL}/login`, {
      username,
      password
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('username', response.data.username)
      localStorage.setItem('student', JSON.stringify(response.data))
      localStorage.setItem('id', response.data._id)
      setUserName(response.data.username)
      alert('Successfully logged in')
      navigate('/landing')
    })
    .catch((error) => {
      alert(error.response.data)
    })
  }

  return (
    <div className='max-w-[400px] mx-auto p-2 mt-20'>
      <h2 className='text-center mb-2 text-xl'>Login</h2>
      <form className='flex flex-col mb-4'>
        <label className='mb-1'>Username:</label>
        <input 
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md'
        placeholder='John.Smith@example.com'></input>
        <label className='mb-1'>Password:</label>
        <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className='p-2 mb-8 border-[1px] border-gray-400 rounded-md'
        placeholder='••••••••'></input>
        <input onClick={formSubmit} type='submit' value='Login' className='bg-blue-500 text-white p-2 rounded-md'/>
      </form>

      <p className='border-t-[1px] border-gray-400 pt-2'>Don't have an account? <Link to='/register' className='text-blue-500'>Register</Link></p>
    </div>
  )
}

export default Login