// import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { user_context as UserContext } from './contexts/user_context';
import { useContext } from 'react';

import './App.css';
// displaying google sign in after signing out successfully

function App() {

  const user = useContext(UserContext);

  return (
    <>
      <header className="App">
        <UserContext.Provider value={user}>
          {/* sign in link if user_context is empty object,  */}
          {/* if it is not empty then display profile link */}
          {!user ? <Link to='/quiz-app-MERN/auth'>Sign In</Link> : <Link to='/quiz-app-MERN/profile'>Profile</Link>}
        </UserContext.Provider>
      </header>
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
