import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  // console.log(process.env.NODE_ENV);
  return (
    <>
      <header className="App">
        <a href="/login">Login</a>
      </header>
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
