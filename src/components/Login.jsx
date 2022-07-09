import React from 'react'
import { TextField,Button } from '@mui/material';
import '../CSS/Login.css'

const Login = () => {
  return (
    <>
        <div className='textfield1'>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </div>

        <Button variant="outlined" color='secondary'>Outlined</Button>
    
    
    </>
  )
}

export default Login