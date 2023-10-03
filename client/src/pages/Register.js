import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
const baseURL = 'http://localhost:5000/register'

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [retryPassword, setRetryPassword] = useState('')

  const navigate = useNavigate()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if(token){
      return navigate('/landing')
    }
  }, [])


  const formSubmit = (e) => {
    e.preventDefault()
    
    if ( !firstName || !lastName || !password || !retryPassword) {
      return alert('Please fill out all fields.')
    }

    //implement more validation
    //username has to be in email format
    //password has to be specific way

    if (password !== retryPassword) {
      return alert('Passwords do not match.')
    }

    axios.post(baseURL, {
      firstName,
      lastName,
      username,
      password
    })
    .then((response) => {
      // console.log(response)
      alert('New user created')
      navigate('/login')
    })
    .catch((error) => {
      // console.log(error)
      alert(error.response.data)
    })
  }

  return (
    <div className='max-w-[400px] mx-auto p-2 mt-20'>
      <h2 className='text-center mb-2 text-xl'>Register</h2>
      <form className='flex flex-col mb-4'>
        <label className='mb-1'>First Name:</label>
        <input
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)} 
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='John'></input>
        <label className='mb-1'>Last Name:</label>
        <input
        value={lastName}
        onChange={(event) => setLastName(event.target.value)}
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='Smith'></input>
        <label className='mb-1'>Username (Email Address):</label>
        <input 
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='John.Smith@example.com'></input>
        <label className='mb-1'>Password:</label>
        <input 
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder='••••••••'></input>
        <label className='mb-1'>Retype Password:</label>
        <input 
        type='password'
        value={retryPassword}
        onChange={(event) => setRetryPassword(event.target.value)}
        className='p-2 mb-8 border-[1px] border-gray-400 rounded-md' placeholder='••••••••'></input>
        <input onClick={formSubmit} type='submit' value='Register' className='bg-blue-500 text-white p-2 rounded-md'/>
      </form>

      <p className='border-t-[1px] border-gray-400 pt-2'>Already have an account? <Link to='/login' className='text-blue-500'>Login</Link></p>

    </div>
  )
}

export default Register