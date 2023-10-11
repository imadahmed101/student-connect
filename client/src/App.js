import React, { useState, createContext, useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Landing from './pages/Landing'
import Community from './pages/Community'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import CreatePost from './pages/CreatePost'
import Post from './pages/Post'
import Education from './pages/Education'
import Work from './pages/Work'
import EditProfile from './pages/EditProfile'
import EditEducation from './pages/EditEducation'
import EditWork from './pages/EditWork'

export const Context = React.createContext();

function App() {

  const [userName, setUserName] = useState(localStorage.getItem('username'));

  return (
    <Context.Provider value={[userName, setUserName]}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/education' element={<Education/>} />
          <Route path='/work' element={<Work/>} />
          <Route path='/community' element={<Community />} />
          <Route path='/createpost' element={<CreatePost />} />
          <Route path='/post/:postID' element={<Post/>} />
          <Route path='/editprofile' element={<EditProfile/>} />
          <Route path='/editeducation' element={<EditEducation/>} />
          <Route path='/editwork' element={<EditWork/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
