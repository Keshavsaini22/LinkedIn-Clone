import { React, useState } from 'react'
import InputField from '../InputField/InputField'
import { FormControl, OutlinedInput, InputAdornment, Box } from '@mui/material'

import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import './SignUpContainer.css'
import Adornment from '../AdonmentTextField/Adornment';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function SignUpContainer({ handleSignup, email, password, setEmail, setPassword }) {
    const isLoading = useSelector((state) => state.signin.isLoading)
    const error = useSelector((state) => state.signin.error)
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState('Show');
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
        showPassword ? setShow('Show') : setShow('Hide');
    };
    const handlesignin = () => {
        navigate('/')
    }
    return (
        <Box className="signup-container" component={"form"} onSubmit={handleSignup}>
            <Box className="email">
                <p>Email or phone number</p>
                <InputField input={email} setInput={setEmail} type="email" color='error' width="350px" height="30px" />
            </Box>
            <Box className="password">
                <p>Password (6+ character)</p>
                <OutlinedInput onChange={(e) => setPassword(e.target.value)} sx={{ width: '350px', height: '40px' }} size='medium'
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                        <InputAdornment sx={{ width: '50px' }} position="end">
                            <button
                                className='password-btn'
                                onClick={handleClickShowPassword}
                            >{show}
                            </button>
                        </InputAdornment>
                    }
                />
                {/* <InputField type="password" color='error' width="350px" height="30px" /> */}
            </Box>
            <Box className="aggreement-text">
                <Box>By clicking Agree & Join or Continue, you agree to the LinkedIn</Box>
                <Box> <span>User Agreement, Privacy Policy,</span> and <span> Cookie Policy.</span></Box>

            </Box>
            <Box className="button" component={"button"} type='submit'>
                {isLoading ? <>Loading</> : <>Agree & Join</>
                }            </Box>
            <Box className="or">
                <Box className="first"></Box>
                <Box className="text">or</Box>
                <Box className="first"></Box>
            </Box>
            <Box className="googlelogin">
                <i class="fa-brands fa-google"></i>  <Box component={"span"}>Continue with Google</Box>
            </Box>
            {/* <Button variant="outlined" startIcon={<GoogleIcon />} >
                Continue with Google
            </Button> */}
            <Box className="signin">Already on LinkedIn? <Box component={"span"} onClick={handlesignin}>Sign in</Box></Box>
        </Box>
    )
}

export default SignUpContainer