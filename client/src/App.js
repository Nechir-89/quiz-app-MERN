import './App.css';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <header className="App">
        app Header
      </header>
      {/* question */}
      {/* answers */}
      <Outlet />
      <footer>
        app footer
      </footer>
    </>
  );
}

export default App;
