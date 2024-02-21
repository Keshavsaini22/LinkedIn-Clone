import { AppBar, InputAdornment, Link, TextField, Toolbar, Typography, Box } from '@mui/material'
import React from 'react'
import LinkedinIcon from '../../assets/images/navlinkedin.png'
import SearchIcon from '@mui/icons-material/Search';
import HouseIcon from '@mui/icons-material/House';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import NotificationsIcon from '@mui/icons-material/Notifications';
import './Navbar.css'
function Navbar() {
    return (
        <Box sx={{ height: '52px', justifyContent: 'center' }} >
            <AppBar sx={{ backgroundColor: 'white', height: '52px', justifyContent: 'center', boxShadow: 'none' }}>
                <Toolbar sx={{ margin: 'auto' }}>
                    <Toolbar sx={{ alignItems: 'center', gap: '10px' }}>
                        <img src={LinkedinIcon} alt='' className='iconsimage'></img>
                        <TextField placeholder="Search…" size='small' variant="standard" sx={{ backgroundColor: '#EDF3F8', p: '5px', alignItems: "center" }}
                            InputProps={{
                                disableUnderline: true, startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon style={{ color: 'black', height: '20px', padding: '5px', cursor: 'pointer' }} />
                                    </InputAdornment>
                                ),
                            }} />
                    </Toolbar>
                    <Toolbar sx={{ alignItems: 'center', gap: '20px' }} >
                        <Link href="/home" sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textDecoration: 'none',
                            color: (theme) => theme.palette.grey[700],
                            "&:hover": { color: "#191919" },
                            '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                        }}   >
                            <HouseIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                            <Typography fontSize={'12px'} align="center"   >Home</Typography>
                        </Link>
                        <Link href="" sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textDecoration: 'none',
                            color: (theme) => theme.palette.grey[700],
                            "&:hover": { color: "#191919" },
                            '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                        }}   >< PeopleAltIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                            <Typography width={'65px'} fontSize={'12px'} align="center">My Network</Typography>
                        </Link>
                        <Link href="" sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textDecoration: 'none',
                            color: (theme) => theme.palette.grey[700],
                            "&:hover": { color: "#191919" },
                            '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                        }}   >< BusinessCenterIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                            <Typography fontSize={'12px'} align="center">Jobs</Typography>
                        </Link>
                        <Link href="" sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textDecoration: 'none',
                            color: (theme) => theme.palette.grey[700],
                            "&:hover": { color: "#191919" },
                            '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                        }}   >
                            <i class="fa-sharp fa-solid fa-comment-dots fa-flip-horizontal" style={{ height: '24px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
                            <Typography fontSize={'12px'} align="center">Messages</Typography>
                        </Link>
                        <Link href="" sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', textDecoration: 'none',
                            color: (theme) => theme.palette.grey[700],
                            "&:hover": { color: "#191919" },
                            '&:active': { textDecoration: 'underline', textUnderlinePosition: '10px' }
                        }}   >< NotificationsIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                            <Typography fontSize={'12px'} align="center">Jobs</Typography>
                        </Link>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar