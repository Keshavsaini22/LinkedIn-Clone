import React from 'react'
import TextField from '@mui/material/TextField';
import './InputField.css'
function InputField({ input, setInput, type, width = '', height = '', error = false, color = '', size = "small" }) {

  return (
    < TextField onChange={(e)=>(setInput(e.target.value))} name={input} value={input} className='inputfield' error={error} sx={{ width: { width }, height: { height } }} type={type} size={size} />
  )
}

// sx={{ width: '300px' }}
export default InputField