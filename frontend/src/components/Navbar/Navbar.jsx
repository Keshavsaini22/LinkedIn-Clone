import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HouseIcon from '@mui/icons-material/House';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, InputAdornment, Stack, TextField, Toolbar, Typography } from '@mui/material';
import React from 'react';
import LinkedinIcon from '../../assets/images/navlinkedin.png';
import './Navbar.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { IoMdLogOut } from "react-icons/io";
import { RiLogoutCircleRFill } from "react-icons/ri";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../features/SignUp/SignIn/SignIn.action';

function Navbar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation()
    if (location.pathname === "/signup" || location.pathname === "/" || location.pathname === "/profile") {
        return null
    }
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
                        <NavLink activeClassName="active" to="/home" style={{ textDecoration: 'none' }}>
                            <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                                <HouseIcon sx={{ height: '24px', width: '24px' }} />
                                <Typography fontSize={'12px'} >Home</Typography></Box>
                        </NavLink>
                        <NavLink activeClassName="active" to="/mynetwork" style={{ textDecoration: 'none' }}>
                            <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', width: '66px', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                                < PeopleAltIcon sx={{ height: '24px', width: '24px', }} />
                                <Typography fontSize={'12px'} >My Network</Typography>
                            </Box>
                        </NavLink>
                        <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }} >
                            <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                                < BusinessCenterIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                                <Typography fontSize={'12px'} align="center">Jobs</Typography>
                            </Box>
                        </NavLink>
                        <NavLink activeClassName="active" to="/messages" style={{ textDecoration: 'none' }} >
                            <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                                <i class="fa-sharp fa-solid fa-comment-dots fa-flip-horizontal" style={{ height: '24px', width: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}></i>
                                <Typography fontSize={'12px'} align="center">Messages</Typography>
                            </Box>
                        </NavLink>
                        <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }} >
                            <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                                < NotificationsIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                                <Typography fontSize={'12px'} align="center">Jobs</Typography>
                            </Box>
                        </NavLink>
                        <NavLink activeClassName="active" to="" style={{ textDecoration: 'none' }} onClick={async () => {
                            //console.log("handlelogout1")
                            const res = await dispatch(logoutUser())
                            // console.log("handlelogout2")
                            if (res)
                                navigate('/')
                        }}>
                            <Box className="logo-label" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: (theme) => theme.palette.grey[700], "&:hover": { color: "#191919" }, }}>
                                < ExitToAppIcon sx={{ height: '24px', width: '24px', alignItems: 'center' }} />
                                <Typography fontSize={'12px'} align="center">Logout</Typography>
                            </Box>
                        </NavLink>
                    </Toolbar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Navbar