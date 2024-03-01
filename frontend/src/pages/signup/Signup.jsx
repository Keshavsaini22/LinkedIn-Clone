import React, { useEffect, useState } from 'react'
import SignUpContainer from '../../components/SignUpContainer/SignUpContainer'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import { useDispatch, useSelector } from 'react-redux';
import './Signup.css'
import { signInUser } from '../../features/SignUp/SignIn/SignIn.action';
import DialogBox from '../../components/DialogBox/DialogBox';
import Button from '@mui/material/Button';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const error = useSelector((state) => state.signin.error)
  const success = useSelector((state) => state.signin.success)
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    //console.log("hello")
    //console.log("deepak bhai", email, password)
    const data = {
      email: email,
      password: password
    }
    dispatch(signInUser(data));
    // setEmail("")
    // setPassword("")
  }
  useEffect(() => {
    if (success) {
      alert('SignUp success')
      navigate('/');
    }
  }, [success])

  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`)

    }
  }, [error])
  return (
    <div className="signuppage">
      <div className="container">
        <div className="logo">
          <img src={LogoImg} alt="logo" />
        </div>
        <div className="headline">Make the most of your professional life</div>
        <SignUpContainer handleSignup={handleSignup} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
        <div className="endingline">Looking to create a page for a business? <span>Get help</span></div>
      </div>
      {/* {error && <h2>{error}</h2>} */}
      <Footer />
      {/* <DialogBox open={success} /> */}
    </div>
  )
}

export default Signup