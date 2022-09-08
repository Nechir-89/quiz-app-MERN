import { Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Pages/home';
import NotFound from './NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        {/* 404 page */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
