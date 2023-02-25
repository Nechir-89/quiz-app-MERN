import { useEffect, useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function App() {
  // console.log(process.env.NODE_ENV);

  const [user, setUser] = useState(null);

  function handleCredentialResponse(response) {
    
    const usr = jwt_decode(response.credential);
    
    
  }
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: '33005118597-p6k0cstkacrfjf2etue4euodlgfs5k63.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });

    const signinEle = document.getElementById('google_signin_btn_container');
    window.google.accounts.id.renderButton(signinEle, { theme: 'outline' });
    window.google.accounts.id.prompt();

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
