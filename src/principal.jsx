import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './components/nav'
import Apps from './components/products'
import Carrusel from './components/carrosel'
import './App.css'
function Principal (){
    return(
       <div>
        <Apps/>
       </div>
    )
}
export default Principal