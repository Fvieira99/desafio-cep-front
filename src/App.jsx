import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import './assets/css/reset.css';
import './assets/css/styles.css';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
