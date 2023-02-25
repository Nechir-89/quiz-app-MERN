import { useEffect, useState } from 'react';
import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  // console.log(process.env.NODE_ENV);
  function handleCredentialResponse(response) {
    console.log(response.credential);
  }
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: '33005118597-p6k0cstkacrfjf2etue4euodlgfs5k63.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    const signinEle = document.getElementById('google_signin_btn_container');
    window.google.accounts.id.renderButton(signinEle, { theme: 'outline' });
  }, []);




  return (
    <>
      <header className="App">
        {/* <a href="/login">Login</a> */}
        <div id='google_signin_btn_container'></div>
      </header>
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
