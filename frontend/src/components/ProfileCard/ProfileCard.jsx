import React from 'react'
import './ProfileCard.css'
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { FaSquare } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import TextImage from '../../assets/images/Linkedin-signuo-logo.png'

function ProfileCard() {
    return (
        <Box className='profilecard'>
            <Box className='upper'>
                <Box className='bigimg'><img src="" alt="" /></Box>
                <Avatar className='profilepic' sx={{ width: 70, height: 70 }} aria-label="recipe">
                    R
                </Avatar>
            </Box>
            <Box className='namesection'>
                <Typography>Keshav Saini</Typography>
                <Typography>Full stack developer</Typography>
            </Box>
            <Divider />
            <Box className='impressionsection'>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>Profile viewers</Typography>
                    <Typography>65</Typography>
                </Stack>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Typography>Post impressions</Typography>
                    <Typography>15</Typography>
                </Stack>
            </Box>
            <Divider />

            <Box className='premiumsection'>
                <Typography>Strengthen your profile with an AI writing assistant</Typography>
                <Box><FaSquare /> <span>Try Premium for	&#8377; 0</span></Box>
            </Box>
            <Divider />

            <Box className="myitems">
                <GoBookmarkFill />
                <span>My items</span>
            </Box>

        </Box>
    )
}

export default ProfileCard