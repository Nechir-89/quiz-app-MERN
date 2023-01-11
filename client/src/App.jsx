import './App.css';
import { Link, Outlet } from 'react-router-dom';

function App() {
  // console.log(process.env.NODE_ENV);
  return (
    <>
      <header className="App">
        {/* <a href="/login">Login</a> */}
        <Link to='/quiz-app-MERN/login'>Login</Link>
      </header>
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
