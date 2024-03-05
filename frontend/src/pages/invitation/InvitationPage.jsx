import { Box, Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import InvitationCard from '../../components/InvitationCard/InvitationCard'
import UserCard from '../../components/UserCard/UserCard'

function InvitationPage() {
    const confirm = useSelector((state) => state.network?.friends?.confirm)

  return (
    <Box className='invitationsection'>
    <Stack direction={'row'} justifyContent={'space-between'} mx={2} my={1}>
        <Box className='invitation'>Invitations</Box>
        <Box className='seeall' onClick={() => {
        }}>See all </Box>
    </Stack>

    <Stack>
        {confirm?.map((item) => (<UserCard item={item} key={item._id}/>))}
    </Stack>
</Box>
  )
}

export default InvitationPage