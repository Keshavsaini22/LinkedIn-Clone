import React from 'react'
import './ProfileCard.css'
import { Avatar, Box, Divider, Stack, Typography } from '@mui/material'
import { FaSquare } from "react-icons/fa";
import { GoBookmarkFill } from "react-icons/go";
import TextImage from '../../assets/images/Linkedin-signuo-logo.png'
import { useNavigate } from 'react-router-dom';

function ProfileCard() {
    const data=localStorage.getItem('user')
    const userData=JSON.parse(data)
// console.log("userdata",userData)
const navigate=useNavigate();
    return (
        <Box className='profilecard'>
            <Box className='upper'>
                <Box className='bigimg'><img src={''} /></Box>
                <Avatar className='profilepic' src={`http://localhost:8080/${userData?.image}`} sx={{ width: 70, height: 70 }} aria-label="recipe">
                </Avatar>
            </Box>
            <Box className='namesection' >
                <Typography onClick={()=>{
                    navigate('/profile')
                }} sx={{ fontSize: '15px', fontWeight: '550' ,"&:hover":{textDecoration:'underline' ,cursor:'pointer'} }}>{userData?.name || "Name"}</Typography>
                <Typography sx={{ fontSize: '11px', color: '#666666' }}>{userData?.title || "Title"}</Typography>
            </Box>
            <Divider />
            <Box className='impressionsection' paddingY={'8px'}>
                <Stack className='impressionchild' direction={'row'} justifyContent={'space-between'} paddingX={'12px'} paddingY={'5px'}>
                    <Typography sx={{ fontSize: '12px', color: '#666666' }}>Profile viewers</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#0A66C2', fontWeight: 'bold' }}>65</Typography>
                </Stack>
                <Stack className='impressionchild' direction={'row'} justifyContent={'space-between'} paddingX={'12px'} paddingY={'5px'}>
                    <Typography sx={{ fontSize: '12px', color: '#666666' }}>Post impressions</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#0A66C2', fontWeight: 'bold' }}>15</Typography>
                </Stack>
            </Box>
            <Divider />

            <Stack className='premiumsection'paddingX={'12px'} paddingY={'8px'} gap={'8px'}>
                <Typography sx={{ fontSize: '12px', color: '#666666' }}>Strengthen your profile with an AI writing assistant</Typography>
                <Box sx={{display:'flex'}}><FaSquare />&nbsp; <span>Try Premium for	&#8377; 0</span></Box>
            </Stack>
            <Divider />

            <Box sx={{display:'flex'}} className="myitems" paddingX={'12px'} paddingY={'8px'}>
                <GoBookmarkFill />
                <span>My items</span>
            </Box>

        </Box>
    )
}

export default ProfileCard