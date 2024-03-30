

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import DetailPage from './Components/DetailPage';
import "./App.css"

function App() {
  return (
    <div>
        <BrowserRouter>
           <Routes>
               <Route path="/"  element={<HomePage />}/>
               <Route path="/item/:id" element={<DetailPage />} />
               <Route path='*' element={<p>404 page not found</p>} />
           </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

