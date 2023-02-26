import React, { useState } from 'react'
import './signin.css'
import { Input, InputLabel, FormControl, Box, TextField, InputAdornment, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    // email id or user name
    // password field
    // submit button
    // sign in with google
    <section>
      <form>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
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
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <FormControl sx={{ width: '25ch' }} variant='standard'>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id='password-input'
              required
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton size='large' onClick={() => setShowPassword(prev => !prev)}>
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>
      </form>
    </section>
  );
}
