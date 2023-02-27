import React, { useState } from 'react'
import { Input, InputLabel, FormControl, Box, TextField, InputAdornment, IconButton, Button, Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SignInWithGoogle from '../sign_in_with_google/SignInWithGoogle';
import './signin.css'


export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // email id or user name
    // password field
    // submit button
    // sign in with google
    <section>
      <form>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1 }}>
          <AccountCircleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            required
            id='email-input'
            name='emailInput'
            type='email'
            label='Email'
            variant='standard'
            width='25ch'
          />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1 }}>
          <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <FormControl sx={{ width: '25ch' }} variant='standard'>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id='password-input'
              type={showPassword ? 'text' : 'password'}
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
        <Box sx={{ display: 'flex', alignItems:'flex-end', m: 2 }}>
          <Button type='submit' variant='outlined' size='small'>Sign In</Button>
          <Typography component='span' variant='body2' sx={{m: 1}}>or</Typography>
          <SignInWithGoogle style={{ margin: '16px' }} />
        </Box>
      </form>
    </section>
  );
}
