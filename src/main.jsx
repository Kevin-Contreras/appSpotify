import React from 'react'
import ReactDOM from 'react-dom/client'
import Principal from './principal'
import Login from './components/login'
import Nav from './components/nav'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/about'
import CartVista from './components/carritoVista'
import Spotify from './components/spotify'
import Usuario from './components/user'

function App (){
  const navigate = useNavigate();

  // Función para redirigir a la ruta /spotify
  const redirectToSpotify = () => {
    navigate('/spotify');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Spotify />} />
        <Route path="/spotify" element={<Principal />} />
        <Route path="/user" element={<Usuario />} />
        {/* Redirigir a /spotify si ninguna ruta coincide */}
        <Route path="*" element={redirectToSpotify} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App/>
)
