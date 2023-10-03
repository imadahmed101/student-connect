import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      navigate('/landing')
    }
  }, [])

  return (
    <div>





      <div className='py-8 md:py-16 flex flex-col md:flex-row'>

        <div className='mx-auto'>
          <img src='/1.png' className='max-h-[350px]' />
        </div>

        <div className='ml-4 mb-12 md:mb-0'>
          <h2 className='text-4xl mb-8 md:mt-40 text-center'>Post Questions, Get Answers,<br />Learn From It And Grow.</h2>
          <div className='max-w-[650px] mb-14'>
            <p className='text-xl'>With StudentConnect you can post your burning questions in our community section. Students can help you by answering them. With this tool we are building a community to learn and grow together. Are you ready?</p>
          </div>
          <div className='flex justify-center'>

            <Link to={'/register'} className='p-4 text-xl text-white bg-blue-500 border-2 border-blue-500 rounded-md mr-2 hover:bg-blue-600 hover:border-blue-600'>Register</Link>
            <Link to={'/login'} className='p-4 text-xl text-blue-500 border-transparent border-2 rounded-md hover:border-blue-500'>Login</Link>
          </div>
        </div>

        <div className='mx-auto'>
          <img src='/2.png' className='max-h-[350px]' />
        </div>







      </div>

      {/* <div className='py-4 md:py-16 flex flex-col md:flex-row'>

        <div className='py-16 bg-gray-800'>
          <div className='max-w-[500px] mx-auto text-white'>

            <h3 className='text-4xl mb-4 text-center'>How It Works</h3>

            <h4 className='text-2xl mb-2'>1. Register</h4>
            <p className='text-xl text-gray-300 mb-8'>Fill out our registration form for a free account to StudentConnect.</p>

            <h4 className='text-2xl mb-2'>2. Login</h4>
            <p className='text-xl text-gray-300 mb-8'>Once you have registered login with your username(email) and password.</p>

            <h4 className='text-2xl mb-2'>3. Post a Question</h4>
            <p className='text-xl text-gray-300 mb-8'>Go to the Community section and click add post to create your very own quesiton.</p>

            <h4 className='text-2xl mb-2'>4. Give Answers</h4>
            <p className='text-xl text-gray-300 mb-8'>In the Community section you can view other student's questions and give your own answers to them.</p>

            <h4 className='text-2xl mb-2'>5. Learn and Grow</h4>
            <p className='text-xl text-gray-300'>Keep checking the Community section and learn from other students and grow your knowledge.</p>
          </div>

        </div>

        <div className='mx-auto'>
          <img src='/1.jpg' className='max-h-[750px]' />
        </div>

      </div> */}


      {/* <div className='py-4 md:py-16 flex flex-col md:flex-row'>

        <div className='py-16 bg-gray-800'>
          <div className='max-w-[500px] mx-auto text-white'>

            <h3 className='text-4xl mb-4 text-center'>How It Works</h3>

            <h4 className='text-2xl mb-2'>1. Register</h4>
            <p className='text-xl text-gray-300 mb-8'>Fill out our registration form for a free account to StudentConnect.</p>

            <h4 className='text-2xl mb-2'>2. Login</h4>
            <p className='text-xl text-gray-300 mb-8'>Once you have registered login with your username(email) and password.</p>

            <h4 className='text-2xl mb-2'>3. Post a Question</h4>
            <p className='text-xl text-gray-300 mb-8'>Go to the Community section and click add post to create your very own quesiton.</p>

            <h4 className='text-2xl mb-2'>4. Give Answers</h4>
            <p className='text-xl text-gray-300 mb-8'>In the Community section you can view other student's questions and give your own answers to them.</p>

            <h4 className='text-2xl mb-2'>5. Learn and Grow</h4>
            <p className='text-xl text-gray-300'>Keep checking the Community section and learn from other students and grow your knowledge.</p>
          </div>

        </div>

        <div className='mx-auto'>
          <img src='/1.jpg' className='max-h-[750px]' />
        </div>

      </div> */}


      <div style={{
        backgroundImage: `url(${'/1.jpg'})`,
        backgroundRepeat: 'no-repeat',
        width: 'cover'
      }}>
        <div className='py-16 md:py-32'></div>


        <div className='py-4 md:py-32'>
          <div className='max-w-[500px] mx-auto text-white bg-gray-800 py-4 px-2 rounded-md'>

            <h3 className='text-4xl mb-4 text-center'>How It Works</h3>

            <h4 className='text-2xl mb-2'>1. Register</h4>
            <p className='text-xl text-gray-300 mb-8'>Fill out our registration form for a free account to StudentConnect.</p>

            <h4 className='text-2xl mb-2'>2. Login</h4>
            <p className='text-xl text-gray-300 mb-8'>Once you have registered login with your username(email) and password.</p>

            <h4 className='text-2xl mb-2'>3. Post a Question</h4>
            <p className='text-xl text-gray-300 mb-8'>Go to the Community section and click add post to create your very own quesiton.</p>

            <h4 className='text-2xl mb-2'>4. Give Answers</h4>
            <p className='text-xl text-gray-300 mb-8'>In the Community section you can view other student's questions and give your own answers to them.</p>

            <h4 className='text-2xl mb-2'>5. Learn and Grow</h4>
            <p className='text-xl text-gray-300'>Keep checking the Community section and learn from other students and grow your knowledge.</p>
          </div>

        </div>


        <div className='py-4 md:py-32'></div>
      </div>

    </div>
  )
}

export default Home