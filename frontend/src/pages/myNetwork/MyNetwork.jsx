import { Stack } from '@mui/material'
import React from 'react'
import ManageMyNetwork from '../../components/ManageMyNetwork/ManageMyNetwork'

function MyNetwork() {
    return (
        <Stack sx={{ m: 'auto', marginTop: '30px' }} direction={'row'} gap={'22px'}>
            <ManageMyNetwork/>
            <Stack></Stack>
        </Stack>
    )
}

export default MyNetwork