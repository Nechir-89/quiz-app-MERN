import React, { useState } from 'react';
import { useFormik } from 'formik';
import { Input, InputLabel, FormControl, Box, TextField, InputAdornment, IconButton, Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SignInWithGoogle from '../sign_in_with_google/SignInWithGoogle';
import './signin.css';


export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    onSubmit: (values) => {
      console.log(values)
      // we need to make a request to backend
      // if it is successfull then update state and redirect to targeted page
    }
  })
  return (
    <section>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1 }}>
          <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            required
            id='email-input'
            name='email'
            type='email'
            label='Email'
            variant='standard'
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1 }}>
          <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <FormControl sx={{ width: '25ch' }} variant='standard'>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id='password-input'
              name='password'
              type={showPassword ? 'text' : 'password'}
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 2 }}>
          <Button type='submit' variant='outlined' size='small'>Sign In</Button>
          <Typography component='span' variant='body2' sx={{ m: 1 }}>or</Typography>
          <SignInWithGoogle style={{ margin: '16px' }} />
        </Box>
      </form>
    </section>
  );
}
