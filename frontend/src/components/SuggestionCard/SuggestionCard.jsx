import React, { useState } from 'react'
import { Avatar, Box, Paper, Stack } from '@mui/material'
import { BsFillPersonPlusFill } from "react-icons/bs";
import './SuggestionCard.css'
import { useDispatch, useSelector } from 'react-redux'
import { sendRequest } from '../../features/Network/Network.action';

function SuggestionCard({ data }) {
    const dispatch = useDispatch();
    const [connect, setConnect] = useState(false);
    const handleConnect = () => {
        console.log("in handle connect", data._id)
        const body = { friendId: data._id }
        dispatch(sendRequest(body))
        setConnect(true)
    }
    return (
        <Stack gap={2} className='suggestioncard' sx={{
            width: '176px', borderRadius: ' 10px',
            border: ' 1px solid rgb(209, 204, 204)',
            cursor: 'pointer'
        }}>
            <Box className='upper'>
                <Box className='bgupperimg'></Box>
                <Avatar className='profileimg' sx={{ width: 100, height: 100 }} />
            </Box>
            <Box className='info'>
                <Box className='name'>{data.name || "Name"}</Box>
                <Box className='desc'> This is title</Box>
            </Box>
            <Box className='mutual'>Some mutual connections</Box>
            <Box className='connect' component={'button'} onClick={handleConnect} > <BsFillPersonPlusFill />&nbsp;Connect </Box>
        </Stack>
    )
}

export default SuggestionCard