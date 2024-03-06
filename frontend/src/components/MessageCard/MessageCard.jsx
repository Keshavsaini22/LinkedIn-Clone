import { Avatar, Box, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function MessageCard({data}) {
    return (
        <Stack direction={'row'} maxWidth={'400px'} gap={1} sx={{}}>
            <Avatar sx={{ bgcolor: red[500], width: 40, height: 40 }} aria-label="recipe"> R </Avatar>
            <Stack>
                <Stack direction={'row'} gap={1}>
                    <Box sx={{ fontSize: '14px', fontWeight: '500' }}>Keshav Saini</Box>
                    <Box sx={{ fontSize: '14px', }}>3.14 pm</Box>
                </Stack>
                <Typography sx={{ wordBreak: 'break-word', fontSize: '13px', marginTop: '12px' }}> {data.content}
  </Typography>
            </Stack>
        </Stack>
    )
}

export default MessageCard