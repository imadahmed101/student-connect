import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'

const baseURL = 'http://localhost:5000/landing'


const Landing = () => {

  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  const [userName, setUserName] = useContext(Context)

  const token = localStorage.getItem('token')
  const student = localStorage.getItem('student')

  useEffect(() => {
    if (!token) {
      return navigate('/login')
    }

    axios.post(baseURL, { student })
      .then((response) => {
        setStudents(response.data)
      })
      .catch((error) => {
        alert(error)
      })

  }, [token, navigate])


  return (
    <div className='py-16'>

      <div className='max-w-[500px] mx-auto px-2'>

        <h1 className='text-center text-xl mb-2'>
          Profile page for user: {userName}
        </h1>
      
        <div className='flex justify-end mb-8'>      
          <Link to={'/editprofile'} className='text-gray-600 px-2 py-1 border-[1px] border-gray-600 hover:text-white hover:bg-gray-600'>Edit Profile</Link>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>First Name: </p>
          <p className='text-gray-700'>{students.firstName}</p>      
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Last Name: </p>
          <p className='text-gray-700'>{students.lastName}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Email (username): </p>
          <p className='text-gray-700'>{students.username}</p>
        </div>

      </div>

    </div>
  )
}

export default Landing