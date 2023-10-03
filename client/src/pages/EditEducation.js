import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'

const baseURL = 'http://localhost:5000/education'
const editURL = 'http://localhost:5000/editeducation'


const EditEducation = () => {

    const [students, setStudents] = useState([])
    const [highestDegree, setHighestDegree] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [schoolAddress, setSchoolAddress] = useState('')
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


    const formSubmit = (e) => {
        e.preventDefault()

        axios.post(editURL, {
            student,
            highestDegree,
            schoolName,
            schoolAddress
        })
            .then((response) => {
                alert('Education updated')
                navigate('/education')
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }


    return (
        <div className='py-16'>



            <div className='max-w-[400px] mx-auto'>
                <div className=''>

                    <h1 className='text-center text-xl mb-8'>
                        Edit education for user: {userName}
                    </h1>

                    <form className='flex flex-col mb-4'>
                        <label className='mb-1'>Highest Degree:</label>
                        <input
                            value={highestDegree}
                            onChange={(event) => setHighestDegree(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.highestDegree}></input>
                        <label className='mb-1'>School Name:</label>
                        <input
                            value={schoolName}
                            onChange={(event) => setSchoolName(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.schoolName}></input>
                        <label className='mb-1'>School Address:</label>
                        <input
                            value={schoolAddress}
                            onChange={(event) => setSchoolAddress(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.schoolAddress}></input>


                        <input onClick={formSubmit} type='submit' value='Update' className='bg-blue-500 text-white p-2 rounded-md' />
                    </form>


                </div>
                <Link to={'/education'} className='text-blue-500'>Back To Education Page</Link>
            </div>

        </div>

    )
}

export default EditEducation