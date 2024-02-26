import React, { Children, useEffect, useState } from 'react'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import RightPic from '../../assets/svgs/login.svg'
import InputField from '../../components/InputField/InputField'
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

import './Login.css'
import Adornment from '../../components/AdonmentTextField/Adornment';
import { loginUser } from '../../features/SignUp/SignIn/SignIn.action';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleJoinNow = () => {
    navigate('/signup')
  }
  const logged = useSelector((state) => state.signin.logged)
  const isloading = useSelector((state) => state.signin.isloading)
  const error = useSelector((state) => state.signin.error)

  const handlesignInNow = () => {
    navigate('/')
  }
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("login", email, password)
    const data = {
      email: email,
      password: password
    }
    dispatch(loginUser(data));
  }
  useEffect(() => {
    if (logged) {  //due to this line main khabi bhi login vali state me nhi ja skda without logout
      navigate('/profile')
    }
  }, [logged])
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
            <Box className="lower" component={"form"} onSubmit={handleLogin}>
              <Box className="email">
                <p>Email or phone number</p>
                <InputField input={email} setInput={setEmail} type="email" width="406px" height='53px' size="medium" />
              </Box>
              <Box className="password">
                <p>Password (6+ character)</p>
                <Adornment input={password} setInput={setPassword} height='53px' />
                {/* <InputField type="password" width="406px" height='53px' size="medium" /> */}
              </Box>
              <Box className="forget">Forgot password?</Box>
              <Box className="button" component={"button"} type='submit'>{isloading ? <>Loading</> : <>Sign in</>
              }</Box>
              {error && <h2>{error}</h2>}
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