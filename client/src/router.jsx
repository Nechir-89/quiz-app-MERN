import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/home';
import NotFound from './NotFound';
import Auth from './Pages/auth';

export default function AppRouter() {
  return (
    <Routes>
      {/* / route */}
      <Route path="/quiz-app-MERN/" element={<App />}>
        {/* home page */}
        <Route index element={<Home />} />
        {/* login */}
        <Route path='auth' element={<Auth/>} />
        {/* 404 page */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
