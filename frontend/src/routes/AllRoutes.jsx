import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home.page'
import UserProfile from '../pages/profile/UserProfile'
import MyNetwork from '../pages/myNetwork/MyNetwork'
import Navbar from '../components/Navbar/Navbar'
import Message from '../pages/message/Message'
import Profile from '../pages/profile/Profile'
import Messaging from '../pages/messaging/Messaging'
import NetworkDetector from '../hoc/NetworkDetector'
import InvitationPage from '../pages/invitation/InvitationPage'

function AllRoutes() {
    return (
        <>
            <Navbar />
            <NetworkDetector>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/home' element={<Home />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='/mynetwork' element={<MyNetwork />} />
                    <Route path='/messages' element={<Messaging />} />
                    <Route path='/invitation' element={<InvitationPage />} />


                </Routes>
            </NetworkDetector>
        </>
    )
}

export default AllRoutes