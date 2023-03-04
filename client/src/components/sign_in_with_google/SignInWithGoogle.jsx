import React, { useEffect, useContext } from 'react';
import { sign_in_with_google } from '../../services/user_service';
import { useNavigate } from 'react-router-dom';
import UserContext from '../../contexts/user_context';

export default function SignInWithGoogle() {

  const navigate = useNavigate();
  const {signIn} = useContext(UserContext)
  function handleCredentialResponse(response) {
    // make request to backend if it is successfull then 
    // update state and redirect to the targeted page
    const res = sign_in_with_google(response.credential);
  
    if(res){
      signIn(res);
      navigate('/quiz-app-MERN/');
    }
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
