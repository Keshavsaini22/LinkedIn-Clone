import React from 'react'
import SignUpContainer from '../../components/SignUpContainer/SignUpContainer'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import './Signup.css'
function Signup() {
  return (
    <div className="signuppage">
      <div className="container">
        <div className="logo">
          <img src={LogoImg} alt="logo" />
        </div>
        <div className="headline">Make the most of your professional life</div>
        <SignUpContainer />
        <div className="endingline">Looking to create a page for a business? <span>Get help</span></div>
      </div>
    </div>
  )
}

export default Signup