import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import './App.css';

// global state
// displaying google sign in after signing out successfully

function App() {
  // console.log(process.env.NODE_ENV);

  const [user, setUser] = useState(null);

  function handleCredentialResponse(response) {
    const usr = jwt_decode(response.credential);
    console.log(usr)
    setUser(() => usr)
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: '33005118597-p6k0cstkacrfjf2etue4euodlgfs5k63.apps.googleusercontent.com',
      // auto_select: false,
      // login_uri: 'http://localhost:3000/login',
      prompt_parent_id: 'google_signin_btn_container',
      // context: 'signup',
      // ux_mode: 'redirect',
      callback: handleCredentialResponse
    });

    const signinEle = document.getElementById('google_signin_btn_container');
    window.google.accounts.id.renderButton(signinEle, {
      theme: 'outline', // filled_blue, filled_black
      type: 'standard', // icon
      text: 'use', // signin_with, signup_with, continue_with
      size: 'medium', // default: large, small, medium
      shape: 'pill', // default: rectangular, circle, square
      logo_alignment: 'center', // default: left, center
      width: '100', // width in px, the max value is 400px
      // locale: 'en-usa',
      // click_listner: handleClickEvent
    });
    // window.google.accounts.id.prompt();

  }, []);

  return (
    <>
      <header className="App">
        {/* <a href="/login">Login</a> */}
        {
          !user ?
            <div id='google_signin_btn_container'></div>
            :
            <>
              <img src={user.picture} alt={user.name} />
              <h3>{user.name}</h3>
              <button onClick={() => {
                window.google.accounts.id.disableAutoSelect();
                setUser(() => null);
              }}>Sign Out</button>
            </>
        }
      </header>
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
