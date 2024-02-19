import { FormControl, OutlinedInput, InputAdornment } from '@mui/material'
import React, { useState } from 'react'
import './Adornment.css'
function Adornment({ height = '', input, setInput }) {
    const [showPassword, setShowPassword] = useState(false);
    const [show, setShow] = useState('Show');
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
        showPassword ? setShow('Show') : setShow('Hide');
    };
    return (
        <OutlinedInput onChange={(e) => (setInput(e.target.value))} value={input} name={input} sx={{ width: '406px', height: { height } }} size='medium'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
                <InputAdornment sx={{ width: '38px' }} position="end">
                    <button type='button'
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