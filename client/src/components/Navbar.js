import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../App'

const Navbar = () => {
  const [userName, setUserName] = useContext(Context)

  const navigation = () => {
    if (userName) {
      return (
        <React.Fragment>
          <div className='flex-1 flex md:justify-center my-auto'>

            <Link to={'/landing'} className='mr-2 md:mr-8'>Profile</Link>
            <Link to={'/education'} className='mr-2 md:mr-8'>Education</Link>
            <Link to={'/work'} className='mr-2 md:mr-8'>Experience</Link>
            <Link to={'/community'} className=''>Community</Link>

          </div>
          <div className='flex-1 flex md:justify-end my-auto'>

            <a>Welcome, {userName}</a>

            <Link onClick={() => {
              localStorage.removeItem('token')
              localStorage.removeItem('student')
              localStorage.removeItem('username')
              localStorage.removeItem('id')
              setUserName(null)
            }} className=' ml-2 pl-2 border-l-2 border-black'>Logout</Link>
          </div>
        </React.Fragment>
      )
    }
    else {
      return (
        <React.Fragment>
          <div className='flex-1 flex md:justify-end my-auto'>
            <Link to={'/'} className='mr-2 text-2xl'>Home</Link>
            <Link to={'/login'} className='mr-2 text-2xl'>Login</Link>
            <Link to={'/register'} className='mr-2 text-2xl'>Register</Link>
          </div>
        </React.Fragment>
      )
    }
  }


  return (

    <div className='flex flex-col md:flex-row justify-between mx-4'>

      <h1 className='text-2xl flex-1 flex my-auto'>
        <Link to={'/'}>
          StudentConnect
        </Link>
      </h1>

      {navigation()}
    </div>
  )
}

export default Navbar