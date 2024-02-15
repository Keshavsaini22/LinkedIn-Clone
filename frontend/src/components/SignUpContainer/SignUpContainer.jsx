import React from 'react'
import InputField from '../InputField/InputField'
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import './SignUpContainer.css'

function SignUpContainer() {
    return (
        <div className="signup-container">
            <div className="email">
                <p>Email or phone number</p>
                <InputField type="email" color='error' width="350px" height="30px" />
            </div>
            <div className="password">
                <p>Password (6+ character)</p>
                <InputField type="password" color='error' width="350px" height="30px" />
            </div>
            <div className="aggreement-text">
                <div>By clicking Agree & Join or Continue, you agree to the LinkedIn</div>
                <div> <span>User Agreement, Privacy Policy,</span> and <span> Cookie Policy.</span></div>

            </div>
            <div className="button">
                Agree & Join
            </div>
            <div className="or">
                <div className="first"></div>
                <div className="text">or</div>
                <div className="first"></div>
            </div>
            <div className="googlelogin">
                <i class="fa-brands fa-google"></i>  <span>Continue with Google</span>
            </div>
            {/* <Button variant="outlined" startIcon={<GoogleIcon />} >
                Continue with Google
            </Button> */}
            <div className="signin">Already on LinkedIn? <span>Sign in</span></div>
        </div>
    )
}

export default SignUpContainer