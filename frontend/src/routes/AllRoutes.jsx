import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home.page'
import UserProfile from '../pages/profile/UserProfile'
import MyNetwork from '../pages/myNetwork/MyNetwork'
import Navbar from '../components/Navbar/Navbar'
import Message from '../pages/message/Message'

function AllRoutes() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />
                <Route path='/profile' element={<UserProfile />} />
                <Route path='/mynetwork' element={<MyNetwork />} />
                <Route path='/messages' element={<Message />} />


            </Routes>
        </>
    )
}

export default AllRoutes