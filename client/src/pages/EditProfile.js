import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'
import baseURL from '../baseURL'

const EditProfile = () => {

    const [students, setStudents] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const navigate = useNavigate()

    const [userName, setUserName] = useContext(Context)

    const token = localStorage.getItem('token')
    const student = localStorage.getItem('student')

    useEffect(() => {
        if (!token) {
            return navigate('/login')
        }

        axios.post(`${baseURL}/landing`, { student })
            .then((response) => {
                setStudents(response.data)
            })
            .catch((error) => {
                alert(error)
            })

    }, [token, navigate])


    const formSubmit = (e) => {
        e.preventDefault()

        axios.post(`${baseURL}/editprofile`, {
            student,
            firstName,
            lastName
        })
            .then((response) => {
                alert('Profile updated')
                navigate('/landing')
            })
            .catch((error) => {
                alert(error.response.data)
            })
    }

    return (
        <div className='py-16'>

            <div className='max-w-[400px] mx-auto'>
                <div>

                    <h1 className='text-center text-xl mb-8'>
                        Edit profile for user: {userName}
                    </h1>


                    <form className='flex flex-col mb-4'>
                        <label className='mb-1'>First Name:</label>
                        <input
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.firstName}></input>
                        <label className='mb-1'>Last Name:</label>
                        <input
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.lastName}></input>


                        <input onClick={formSubmit} type='submit' value='Update' className='bg-blue-500 text-white p-2 rounded-md' />
                    </form>
                </div>
                <Link to={'/landing'} className='text-blue-500'>Back To Profile Page</Link>
            </div>
        </div>

    )
}

export default EditProfile