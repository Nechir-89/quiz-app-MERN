import { Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './NotFound';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        {/* 404 page */}
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
