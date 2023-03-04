import React, { useContext } from 'react'
import UserContext from '../../contexts/user_context';
import { Link } from 'react-router-dom'

export default function Header() {
  const { user } = useContext(UserContext);
  console.table(user);
  return (
    <header className="App">
      {/* sign in link if user_context is empty object,  */}
      {/* if it is not empty then display profile link */}
      {!user ? <Link to='/quiz-app-MERN/auth'>Sign In</Link> : <Link to='/quiz-app-MERN/profile'>Profile</Link>}
    </header>
  )
}
