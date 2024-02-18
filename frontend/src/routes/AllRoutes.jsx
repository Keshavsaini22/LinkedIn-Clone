import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login/Login'
import Signup from '../pages/signup/Signup'
import Home from '../pages/home/Home.page'

function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/home' element={<Home />} />

            </Routes>
        </>
    )
}

export default AllRoutes