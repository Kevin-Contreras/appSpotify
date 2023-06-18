import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import imagen1 from '/imagen1.jpg'
import imagen2 from '/imagen2.jpg'

import '../App.css'
function Carrusel(){

    return(
        <div>

            <div className='carrosel'>
            <div style={{position:"relative"}}>
                <div>
                <h1 style={{position:"absolute",color:"white",top:"55%",left:"30%"}} >PRODUCTOS A LA MEDIDA</h1>
                <button style={{position:"absolute",color:"white",  top:"75%",left:"45%"}}>IR AL PRODUCTO</button>
                </div>
          
            <img className='imagen' src={imagen1} alt="" />
            </div>
           <div style={{position:"relative"}}>
            <h1 style={{position:"absolute",color:"white",top:"55%",left:"30%"}} >PRODUCTOS A LA MEDIDA</h1>
             <button style={{position:"absolute",color:"white",  top:"75%",left:"45%"}}>IR AL PRODUCTO</button>
           <img  className='imagen'src={imagen2} alt="" />

           </div>

            </div>
        </div>
    )
}
export default Carrusel