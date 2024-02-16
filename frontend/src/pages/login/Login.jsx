import React from 'react'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import RightPic from '../../assets/svgs/login.svg'
import InputField from '../../components/InputField/InputField'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";

import './Login.css'
import Adornment from '../../components/AdonmentTextField/Adornment';
function Login() {
  const navigate = useNavigate();
  const handleJoinNow = () => {
    navigate('/signup')
  }
  const handlesignInNow = () => {
    navigate('/')
  }
  return (
    <Box className="loginpage">
      <Box className="nav">
        <Box className="logo">
          <img src={LogoImg} alt="Logo" />
        </Box>
        <Box className='nav-btn'>
          <Box className="join-now" onClick={handleJoinNow}>Join now</Box>
          <Box className="signin" onClick={handlesignInNow}>Sign in</Box>
        </Box>
      </Box>
      <Box className="container">
        <Box className="body">
          <Box className="left">
            <Box className="welcometext">Welcome to your professional community</Box>
            <Box className="lower">
              <Box className="email">
                <p>Email or phone number</p>
                <InputField type="email" width="406px" height='53px' size="medium" />
              </Box>
              <Box className="password">
                <p>Password (6+ character)</p>
                <Adornment height='53px' />
                {/* <InputField type="password" width="406px" height='53px' size="medium" /> */}
              </Box>
              <Box className="forget">Forgot password?</Box>
              <Box className="button">Sign in</Box>
              <Box className="or">
                <Box className="line"></Box>
                <Box className="text">or</Box>
                <Box className="line"></Box>
              </Box>
              <Box className="aggrement">By clicking Continue, you agree to LinkedIn <span>User Agreement, Privacy Policy,</span> and <span>Cookie Policy.</span></Box>
              <Box className="lowerbutton">
                <Box className="googlebtn">
                  <i class="fa-brands fa-google"></i>  <span>Continue with Google</span>
                </Box>
                <Box className="linkedinbtn" onClick={handleJoinNow}>New to LinkedIn? Join now</Box>
              </Box>
            </Box>
          </Box>
          <Box className="right">
            <img src={RightPic} alt="" />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Login