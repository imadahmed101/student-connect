import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../App'

const baseURL = 'http://localhost:5000/work'
const editURL = 'http://localhost:5000/editwork'


const EditWork = () => {

    const [students, setStudents] = useState([])
    const [experienceLevel, setExperienceLevel] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [jobProfile, setJobProfile] = useState('')
    const [skills, setSkills] = useState('')
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
            experienceLevel,
            jobTitle,
            companyName,
            jobProfile,
            skills
        })
            .then((response) => {
                alert('Work updated')
                navigate('/work')
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
                        Edit work for user: {userName}
                    </h1>

                    <form className='flex flex-col mb-4'>
                        <label className='mb-1'>Experience Level:</label>
                        <input
                            value={experienceLevel}
                            onChange={(event) => setExperienceLevel(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.experienceLevel}></input>
                        <label className='mb-1'>Job Title:</label>
                        <input
                            value={jobTitle}
                            onChange={(event) => setJobTitle(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.jobTitle}></input>
                        <label className='mb-1'>Company Name:</label>
                        <input
                            value={companyName}
                            onChange={(event) => setCompanyName(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.companyName}></input>
                        <label className='mb-1'>Job Profile:</label>
                        <input
                            value={jobProfile}
                            onChange={(event) => setJobProfile(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.jobProfile}></input>
                        <label className='mb-1'>Skills:</label>
                        <input
                            value={skills}
                            onChange={(event) => setSkills(event.target.value)}
                            className='p-2 mb-2 border-[1px] border-gray-400 rounded-md' placeholder={students.skills}></input>



                        <input onClick={formSubmit} type='submit' value='Update' className='bg-blue-500 text-white p-2 rounded-md' />
                    </form>

                </div>
                <Link to={'/work'} className='text-blue-500'>Back To Work Page</Link>
            </div>
        </div>

    )
}

export default EditWork