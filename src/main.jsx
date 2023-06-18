import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './principal'
import Login from './components/login'
import Nav from './components/nav'
import './index.css'
import { BrowserRouter, Routes, Route, useNavigate, Router } from "react-router-dom";
import About from './components/about'
import CartVista from './components/carritoVista'
import Spotify from './components/spotify'
import Usuario from './components/user'

function App (){



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Spotify />} />
        <Route path="/spotify" element={<Principal />} />
        <Route path="/user" element={<Usuario />} />
        <Route path="*" element={<Principal />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
