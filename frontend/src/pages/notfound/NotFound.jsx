import { Stack } from '@mui/material'
import React from 'react'

function NotFound() {
    return (
        <Stack marginY={'30vh'} alignItems={'center'}>
            <h1>404 Not Found</h1>
            <h6>The page you are looking for does not exist.</h6>
        </Stack>
    )
}

export default NotFound