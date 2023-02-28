import React from 'react'
import './auth.css'
import Signin from '../../components/signin';

// todo: use global state for user object
// todo: validate sign in form inputs
// todo: manage sign in inputs states
// todo: style form
// todo: collect user sign in data and pass it to server
// todo: built sign up component


export default function Auth() {
  // useEffect(()=>{
  //   google.acc
  // }, [])
  return (
    <div>
      Auth
      <Signin />
    </div>
  );
}
