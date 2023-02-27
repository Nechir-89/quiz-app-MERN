import jwtDecode from 'jwt-decode';
import React, { useEffect } from 'react'

export default function SignInWithGoogle() {

  function handleCredentialResponse(response) {
    const signedUser = jwtDecode(response.credential);
    console.log(signedUser);
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse
    })
    const signInElement = document.getElementById('sign_in_div');
    window.google.accounts.id.renderButton(signInElement, {
      theme: 'outline',
      size: 'medium',
      text: 'signin_with',
      shape: 'rectangular',
      type: 'standard',
      logo_alignment: 'center'
    })
  }, []);
  return (
    <div id='sign_in_div'></div>
  )
}
