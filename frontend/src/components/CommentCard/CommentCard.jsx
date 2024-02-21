import React from 'react'
import './CommentCard.css'
import { Avatar, Stack, Typography, Box, Button, Divider } from '@mui/material'
import { red } from '@mui/material/colors'
import { BsDot } from 'react-icons/bs'
function CommentCard({ body }) {
    return (
        <Stack className='commentcard' direction={'row'} gap={1} margin={'10px'}>
            <Avatar sx={{ bgcolor: red[500], width: 40, height: 40 }} aria-label="recipe">
                R
            </Avatar>
            <Stack spacing={1}>
                <Box className="text">
                    <Stack direction="row" justifyContent={'space-between'} spacing={0}>
                        <Stack direction="row" spacing={0}><Typography className='username' sx={{ fontSize: '14px' }}>Keshav Saini</Typography>
                            <BsDot className='dot' />
                            <Typography className='numtext' sx={{ fontSize: '14px' }}>2nd</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontSize: '14px' }} className='numtext'>2h</Typography>
                            <Box sx={{ color: '#666666' }}><i class="fa-solid fa-ellipsis"></i></Box>
                        </Stack>
                    </Stack>
                    <Typography className='degination'>Senior Developer @ Zenmonk</Typography>

                    <Typography sx={{ wordBreak: 'break-word', fontSize: '13px', marginTop: '12px' }}>
                        {body}                    </Typography>
                </Box>
                <Stack direction={'row'} gap={1}>
                    <Box className='cmtbtn' sx={{ fontSize: '12px' }}>Like</Box>
                    <Divider orientation="vertical" />
                    <Box className='cmtbtn' sx={{ fontSize: '12px' }}>Reply</Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CommentCard