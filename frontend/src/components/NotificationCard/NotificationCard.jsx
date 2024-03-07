import { Avatar, Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function NotificationCard() {
    return (
        <Stack direction={'row'} p={1} justifyContent={'space-between'} gap={2} alignItems={'center'}  >
            <Avatar sx={{ width: 56, height: 56 }} />
            <Box className='notification' sx={{ fontSize: '14px' }}><span className='name'>My Name :</span><span className='content'>&nbsp;This is the body of my comment ort ri dont know what is this</span></Box>
            <Stack>
                <Box sx={{ fontSize: '12px' }}>1 day</Box>
                <IconButton><MoreHorizIcon /></IconButton>
            </Stack>
        </Stack>)
}

export default NotificationCard