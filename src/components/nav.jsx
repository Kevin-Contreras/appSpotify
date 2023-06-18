import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../App.css'
import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";

function Nav (){
    return(
 <nav   >
  <ul style={{marginTop:"20px"}} >

    <NavLink to={"/login"}>  <li style={{display:"inline-block",marginRight:"25px",fontFamily:"Avenir Next"}}>Iniciar sesion</li>
</NavLink>


</ul>
  <div>
    <img style={{height:"100px"}} src="https://cdn.shopify.com/s/files/1/1363/9583/files/IMG_4926_200x200.png?v=1619110569" alt="" />
  </div>
   <div  >
<ul style={{marginTop:"20px"}} >
  <NavLink to={"/"}>  <li style={{display:"inline-block",marginRight:"20px",fontFamily:"Avenir Next"}}>Inicio</li></NavLink>
<NavLink to={"/about"}>
<li style={{display:"inline-block",marginRight:"20px",fontFamily:"Avenir Next"}}>Sobre nosotros</li>
</NavLink>
<NavLink to={"/spotify"}>
<li style={{display:"inline-block",marginRight:"20px",fontFamily:"Avenir Next"}}>todos los productos</li>

</NavLink>
  <li style={{display:"inline-block",marginRight:"20px",fontFamily:"Avenir Next"}}><ShoppingBagIcon/></li>

</ul>
  

   </div>
      </nav>
       
    )
}
export default Nav