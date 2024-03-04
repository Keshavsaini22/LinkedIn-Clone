import React from 'react'
import ProfileBanner from '../../assets/images/profileBanner.jpg'
import { Avatar, Box, IconButton, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import './ProfileMain.css'
function ProfileMain() {
    return (
        <Stack className='profile-main' maxWidth={'800px'} sx={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid rgb(209, 204, 204)', marginTop: '30px' }}>
            <Box className='profile-upper-section'>
                <Box className='profile-banner'>
                    <img src={ProfileBanner} alt="" srcset="" />
                    <IconButton sx={{ backgroundColor: 'white', width: '30px', height: '30px', color: '#0a66c2', '&:hover': { backgroundColor: 'white', color: '#0A39C2' } }} className='profile-banner-btn'><EditIcon fontSize='small' /></IconButton>
                </Box>
                <Avatar className='profile-upper-section-dp' sx={{ width: '110px', height: '110px' }}></Avatar>
            </Box>
            <Stack padding={'70px 25px 25px 25px'} sx={{ position: 'relative' }}>
                <Stack direction={'row'} alignItems={'center'} gap={1}>
                    <IconButton sx={{ position: 'absolute', right: '5px', top: '5px' }}><EditIcon sx={{ fontSize: '30px' }} /></IconButton>
                    <Box sx={{ fontSize: '20px', fontWeight: '500' }}>Keshav Saini</Box>
                    <Box sx={{ fontSize: '14px', color: '#a8a8a8' }}>(He /Him)</Box>
                    <Box sx={{ border: '1px dotted #0b66c2', backgroundColor: 'white', padding: '2px 5px', borderRadius: '15px', display: 'flex', gap: '2px', alignItems: 'center', color: '#0b66c2', fontSize: '14px', fontWeight: 'bold', '&:hover': { cursor: 'pointer', backgroundColor: 'rgb(229, 240, 253)' } }} component={'button'}><VerifiedUserOutlinedIcon fontSize='13px' />Verify now</Box>
                </Stack>
                <Box sx={{ fontSize: '15px', color: '#666666', fontWeight: '500' }}>Full Stack Developer</Box>
                <Stack py={1.5} gap={1}>
                    <Stack alignItems={'end'} gap={1} direction={'row'}>
                        <Avatar></Avatar>
                        <Box fontSize={'15px'} sx={{ color: '#666666' }}>Zenmonk</Box>
                    </Stack>
                    <Stack alignItems={'end'} gap={1} direction={'row'}>
                        <Avatar></Avatar>
                        <Box fontSize={'15px'} sx={{ color: '#666666' }}>Zenmonk</Box>
                    </Stack>
                </Stack>
                <Box className='profile-address' fontSize={'15px'} sx={{ color: '#9a9a9a' }}>Sahibzada Ajit Singh Nagar, Punjab, India  &nbsp; <span>Contact info</span> </Box>
                <Box py={1} sx={{ color: '#0b66c2', fontSize: '14px', fontWeight: '500' }}>500+ connections</Box>
                <Stack direction={'row'} gap={1.2} paddingBottom={'15px'}>
                    <Box sx={{ width: '210px', height: '32px', backgroundColor: '#0a66c2', color: 'white', display: 'flex', alignItems: 'center', justifyContent: "center", borderRadius: '20px', '&:hover': { cursor: 'pointer', backgroundColor: '#004182' } }}>Open to</Box>

                    <Box sx={{ width: '170px', fontWeight: '500', height: '32px', backgroundColor: 'white', color: '#0a66c2', display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #0a66c2 ', borderRadius: '20px', '&:hover': { cursor: 'pointer', backgroundColor: 'rgb(229, 240, 253)', width: '168px', height: '30px', border: '2px solid #0a66c2 ' } }} >Add profile section</Box>
                    <Box sx={{ width: '70px', fontWeight: '500', height: '32px', backgroundColor: 'white', color: '#666666', display: 'flex', alignItems: 'center', justifyContent: "center", border: '1px solid #666666 ', borderRadius: '20px', '&:hover': { cursor: 'pointer', backgroundColor: '#f4f2ee', width: '68px', height: '30px', border: '2px solid #666666 ' } }}>More</Box>
                </Stack>
                <Stack p={1} sx={{ backgroundColor: '#dde7f1', borderRadius: '10px', '&:hover': { 'cursor': 'pointer' } }}>
                    <Stack sx={{ position: 'relative' }} direction={'row'} justifyContent={'space-between'} >
                        <Box sx={{ fontWeight: '500' }}>Open to work</Box>
                        <IconButton sx={{ position: 'absolute', right: '5px', }}><EditIcon sx={{ fontSize: '20px' }} /></IconButton>
                    </Stack>
                    <Box >Software Developer, Software Engineer, Junior Software Engineer and Associa...</Box>
                    <Box sx={{ fontSize: '14px', color: '#0a66c2', fontWeight: '500', '&:hover': { textDecoration: 'underline' } }}>Show details</Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ProfileMain