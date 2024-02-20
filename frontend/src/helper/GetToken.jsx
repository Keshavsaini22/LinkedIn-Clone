import React from 'react'
import { useSelector } from 'react-redux'

function GetToken() {
    const token = useSelector(state => state.signin.token)
     const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
    return config
}

export default GetToken

