import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import './Invitations.css'
import InvitationCard from '../InvitationCard/InvitationCard'
function Invitations() {
    return (
        <Box className='invitationsection'>
            <Stack direction={'row'} justifyContent={'space-between'} mx={2} my={1}>
                <Box className='invitation'>Invitations</Box>
                <Box className='seeall'>See all 4</Box>
            </Stack>
            <Divider />
            <Stack>
                <InvitationCard />
                <Divider />
                <InvitationCard />
                <Divider />
                <InvitationCard />
            </Stack>
        </Box>
    )
}

export default Invitations