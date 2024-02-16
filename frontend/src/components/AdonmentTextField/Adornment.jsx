import { FormControl, OutlinedInput, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import './Adornment.css'
function Adornment(height = '') {
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState('Show');
    const handleClickShowPassword = () => {
        setShowPassword((show) => !show)
        showPassword ? setShow('Show') : setShow('Hide');
    };
    return (   
            <OutlinedInput sx={{ width: '406px',height: { height } }} size='medium'
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment sx={{ width: '50px'}} position="end"> 
                        <button
                            className='password-btn'
                            onClick={handleClickShowPassword}
                        >{show}
                        </button>
                    </InputAdornment>
                }
            />
      
    )
}
export default Adornment