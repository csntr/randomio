import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Lobby from './pages/Lobby'
import Room from './pages/Room';

import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
