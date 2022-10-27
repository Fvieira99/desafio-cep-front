import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello World</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
