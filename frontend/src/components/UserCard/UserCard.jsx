import { Avatar, Box, Divider, Stack } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createRoom } from '../../features/Room/room.action';
import { toggleroom } from '../../features/Room/room.slice';

function UserCard({ item }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userid = localStorage.getItem('userid')
    const user = userid !== item.sender._id ? item.sender : item.receiver
    const handleMessage = async () => {
        const res = await dispatch(createRoom(user._id));
        if (res) {
            // console.log('res: ', res.payload[0]);
            dispatch(toggleroom(res.payload[0]))
            navigate(`/messages`)

        }
    }
    return (
        <>
            <Divider />
            <Stack className='invitationCard' direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={'12px'}>
                <Stack direction={'row'} gap={1}>
                    <Avatar
                        sx={{ width: 72, height: 72 }}
                    />
                    <Stack justifyContent={'center'}>
                        <Box className='name'>{user?.name}</Box>
                        <Box className='desc'>This is my title or description</Box>
                    </Stack>
                </Stack>
                <Stack direction={'row'} gap={2}>
                    <Box className='accept' onClick={handleMessage} component={'button'}>Message</Box>
                    {/* <Box className='ignore' onClick={() => { }} component={'button'}>Message</Box> */}
                </Stack>
            </Stack></>
    )
}

export default UserCard