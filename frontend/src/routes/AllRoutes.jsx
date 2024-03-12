import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
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
import Notification from '../pages/notification/Notification'
import NotFound from '../pages/notfound/NotFound'

function AllRoutes() {
    const PrivateRoute = ({ children }) => {
        const isAuth = localStorage.getItem("token");
        return isAuth === null ? <Navigate to="/" /> : <>{children}</>;
    };
    return (
        <>
            <Navbar />
            <NetworkDetector>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/home' element={
                        <PrivateRoute>
                            <Home />
                        </PrivateRoute>} />
                    <Route path='/profile' element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>} />
                    <Route path='/mynetwork' element={
                        <PrivateRoute>
                            <MyNetwork />
                        </PrivateRoute>
                    } />
                    <Route path='/messages' element={
                        <PrivateRoute>
                            <Messaging />
                        </PrivateRoute>
                    } />
                    <Route path='/invitation' element={
                        <PrivateRoute>
                            <InvitationPage />
                        </PrivateRoute>
                    } />
                    <Route path='/notification' element={<PrivateRoute>
                        <Notification />
                    </PrivateRoute>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </NetworkDetector>
        </>
    )
}

export default AllRoutes