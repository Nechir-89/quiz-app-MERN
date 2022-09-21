import './App.css';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://localhost:8000/api/questions')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <>
      <header className="App">
        {/* app Header */}
      </header>
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </>
  );
}

export default App;
