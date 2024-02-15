import React from 'react'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import RightPic from '../../assets/svgs/login.svg'
import InputField from '../../components/InputField/InputField'
import './Login.css'
function Login() {
  return (
    <div className="loginpage">
      <div className="container">
        <div className="nav">
          <div className="logo">
            <img src={LogoImg} alt="Logo" />
          </div>
          <div className='nav-btn'>
          <div className="join-now">Join now</div>
          <div className="signin">Sign in</div>
          </div>
        </div>
        <div className="body">
          <div className="left">
            <div className="welcometext">Welcome to your professional community</div>
            <div className="email">
              <p>Email or phone number</p>
              <InputField type="email" width="400px" size="medium" />
            </div>
            <div className="password">
              <p>Password (6+ character)</p>
              <InputField type="password" width="400px" size="medium" />
            </div>
            <div className="forget">Forgot password?</div>
            <div className="button">Sign in</div>
            <div className="or">
              <div className="line"></div>
              <div className="text">or</div>
              <div className="line"></div>
            </div>
            <div className="aggrement">By clicking Continue, you agree to LinkedIn <span>User Agreement, Privacy Policy,</span> and <span>Cookie Policy.</span></div>
            <div className="googlebtn">
              Continue with Google
            </div>
            <div className="linkedinbtn">New to LinkedIn? Join now</div>
          </div>
          <div className="right">
            <img src={RightPic} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login