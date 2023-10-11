import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'
import baseURL from '../baseURL'

const Education = () => {

  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  const [userName, setUserName] = useContext(Context)

  const token = localStorage.getItem('token')
  const student = localStorage.getItem('student')

  useEffect(() => {
    if (!token) {
      return navigate('/login')
    }

    axios.post(`${baseURL}/education`, { student })
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
          Education page for user: {userName}
        </h1>

        <div className='flex justify-end mb-8'>
          <Link to={'/editeducation'} className='text-gray-600 px-2 py-1 border-[1px] border-gray-600 hover:text-white hover:bg-gray-600'>Edit Education</Link>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Highest Degree: </p>
          <p className='text-gray-700'>{students.highestDegree}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>School Name: </p>
          <p className='text-gray-700'>{students.schoolName}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>School Address: </p>
          <p className='text-gray-700'>{students.schoolAddress}</p>
        </div>

      </div>

    </div>

  )
}

export default Education