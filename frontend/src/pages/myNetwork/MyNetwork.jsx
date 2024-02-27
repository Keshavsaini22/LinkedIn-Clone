import { Box, Stack } from '@mui/material'
import React from 'react'
import ManageMyNetwork from '../../components/ManageMyNetwork/ManageMyNetwork'
import Invitations from '../../components/Invitations/Invitations'
import './MyNetwork.css'
import Suggestion from '../../components/Suggestion/Suggestion'
function MyNetwork() {
    return (
        <Stack justifyContent={"center"} sx={{ marginTop: '30px', margin: '30px 30px' }} direction={'row'} gap={3}>
            <ManageMyNetwork />
            <Stack gap={3}>
                <Invitations />
                <Suggestion />
            </Stack>
        </Stack>
    )
}

export default MyNetwork