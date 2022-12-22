import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Error404 from '../Pages/Errors/404';
import Home from '../Pages/Home';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
