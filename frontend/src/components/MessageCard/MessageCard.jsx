import { Avatar, Box, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function MessageCard({ data, person }) {
    const userid = localStorage.getItem('userid')
    var user={}
    // var user = localStorage.getItem('user')
    // user = JSON.parse(user)
    userid === data.sender ? user.name = "You" : user = person
    return (
        <Stack direction={'row'} maxWidth={'400px'} gap={1} sx={{marginY:'5px'} }>
            <Avatar sx={{ bgcolor: red[500], width: 40, height: 40 }} aria-label="recipe"> R </Avatar>
            <Stack>
                <Stack direction={'row'} gap={1}>
                    <Box sx={{ fontSize: '14px', fontWeight: '500' }}>{user.name}</Box>
                    <Box sx={{ fontSize: '14px', }}>{(new Date(data.createdAt)).toLocaleString()}</Box>
                </Stack>
                <Typography sx={{ wordBreak: 'break-word', fontSize: '13px', marginTop: '12px' }}> {data.content}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default MessageCard 