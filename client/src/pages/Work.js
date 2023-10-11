import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'
import baseURL from '../baseURL'

const Work = () => {

  const [students, setStudents] = useState([])
  const navigate = useNavigate()

  const [userName, setUserName] = useContext(Context)

  const token = localStorage.getItem('token')
  const student = localStorage.getItem('student')

  useEffect(() => {
    if (!token) {
      return navigate('/login')
    }

    axios.post(`${baseURL}/work`, { student })
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
          Experience page for user: {userName}
        </h1>

        <div className='flex justify-end mb-8'>
          <Link to={'/editwork'} className='text-gray-600 px-2 py-1 border-[1px] border-gray-600 hover:text-white hover:bg-gray-600'>Edit Experience</Link>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Experience Level: </p>
          <p className='text-gray-700'>{students.experienceLevel}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Job Title: </p>
          <p className='text-gray-700'>{students.jobTitle}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Company Name: </p>
          <p className='text-gray-700'>{students.companyName}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Job Profile: </p>
          <p className='text-gray-700'>{students.jobProfile}</p>
        </div>

        <div className='flex flex-row justify-between'>
          <p className='mr-2'>Skills: </p>
          <p className='text-gray-700'>{students.skills}</p>
        </div>
      </div>
    </div>
  )
}

export default Work