import React from 'react'
import { Avatar, Box, Paper, Stack } from '@mui/material'
import { BsFillPersonPlusFill } from "react-icons/bs";
import './SuggestionCard.css'
function SuggestionCard() {
    return (
        <Stack gap={2} className='suggestioncard' sx={{
            width: '176px', borderRadius: ' 10px',
            border: ' 1px solid rgb(209, 204, 204)',
            cursor: 'pointer'}}>
            <Box className='upper'>
                <Box className='bgupperimg'></Box>
                <Avatar className='profileimg' sx={{ width: 100, height: 100 }} />
            </Box>
            <Box className='info'>
                <Box className='name'>Mannat Mehta</Box>
                <Box className='desc'> This is title</Box>
            </Box>
            <Box className='mutual'>Some mutual connections</Box>
            <Box className='connect'><BsFillPersonPlusFill />&nbsp;Connect 
            </Box>
        </Stack>
    )
}

export default SuggestionCard