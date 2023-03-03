import React from 'react'
import './auth.css'
import Signin from '../../components/signin';

// todo: use global state for user object
// compeleted: validate sign in form inputs
// compeleted: manage sign in inputs states
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
