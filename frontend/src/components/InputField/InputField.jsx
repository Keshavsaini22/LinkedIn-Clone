import React from 'react'
import TextField from '@mui/material/TextField';
import './InputField.css'
function InputField({ type, width='', height='', color = '',size="small" }) {
  return (
    < TextField className='inputfield' color={color} sx={{ width: { width }, height: { height } }} type={type} size={size} />
  )
}

// sx={{ width: '300px' }}
export default InputField