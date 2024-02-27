import React from 'react'
import './InvitationCard.css'
import { Avatar, Box, Stack } from '@mui/material'
function InvitationCard() {
    return (
        <Stack className='invitationCard' direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={'12px'}>
            <Stack direction={'row'} gap={1}>
                <Avatar
                    sx={{ width: 72, height: 72 }}
                />
                <Stack  justifyContent={'center'}>
                    <Box className='name'>Jannat Bhengray</Box>
                    <Box className='desc'>This is my title or description</Box>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={2}>
                <Box className='ignore'>Ignore</Box>
                <Box className='accept'>Accept</Box>
            </Stack>
        </Stack>
    )
}

export default InvitationCard