import React from 'react'
import './InvitationCard.css'
import { Avatar, Box, Stack } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { updateRelation } from '../../features/Network/Network.action';

function InvitationCard({ data }) {
    const dispatch = useDispatch();

    const onhandleIgnore = () => {
        console.log("ignore", data)
        const body = {
            id: data._id,
            status: 'reject'
        }
        dispatch(updateRelation(body))
    }
    const onhandleConfirm = () => {
        console.log("confirm", data)
        const body = {
            id: data._id,
            status: 'confirm'
        }
        dispatch(updateRelation(body))
    }
    return (
        <Stack className='invitationCard' direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={'12px'}>
            <Stack direction={'row'} gap={1}>
                <Avatar
                    sx={{ width: 72, height: 72 }}
                />
                <Stack justifyContent={'center'}>
                    <Box className='name'>{data.sender.name || "Name"}</Box>
                    <Box className='desc'>This is my title or description</Box>
                </Stack>
            </Stack>
            <Stack direction={'row'} gap={2}>
                <Box className='ignore' onClick={onhandleIgnore} component={'button'}>Ignore</Box>
                <Box className='accept' onClick={onhandleConfirm} component={'button'}>Accept</Box>
            </Stack>
        </Stack>
    )
}

export default InvitationCard