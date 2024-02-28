import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import './Invitations.css'
import InvitationCard from '../InvitationCard/InvitationCard'
import { useSelector } from 'react-redux'
function Invitations() {
    const pending = useSelector((state) => state.network?.friends?.pending)

    return (
        <Box className='invitationsection'>
            <Stack direction={'row'} justifyContent={'space-between'} mx={2} my={1}>
                <Box className='invitation'>Invitations</Box>
                <Box className='seeall'>See all </Box>
            </Stack>
            
            <Stack>
                {pending?.map((item) => (<InvitationCard data={item} />))}              
            </Stack>
        </Box>
    )
}

export default Invitations