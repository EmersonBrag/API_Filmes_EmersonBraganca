import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.css';
import Home from './Pages/Home';
import Details from './Pages/Details'
import Search from './Pages/Search';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='/search/:searchText' element={<Search />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
