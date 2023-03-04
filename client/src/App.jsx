import { Outlet } from 'react-router-dom';
import { UserContextProvider } from './contexts/user_context';
import Header from './components/header/Header';
import './App.css';

function App() {


  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <footer>
        {/* app footer */}
      </footer>
    </UserContextProvider>
  );
}

export default App;
