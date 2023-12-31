import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import imagen1 from '/imagen1.jpg'
import imagen2 from '/imagen2.jpg'

function CartVista (){
    return(
<section class="productCard">
  <div class="container">
    <div class="info">
      <h3 class="name">Fila Disruptor</h3>
      <h1 class="slogan">Performance with comfort</h1>
      <p class="price">$500.00</p>
      <div class="attribs">
        <div class="attrib size">
          <p class="header">Select Size</p>
          <div class="options">
            <div class="option">6</div>
            <div class="option">7</div>
            <div class="option">8</div>
            <div class="option">9</div>
            <div class="option">10</div>
            <div class="option">11</div>
          </div>
        </div>
        <div class="attrib color">
          <p class="header">Select Color</p>
          <div class="options">
            <div class="option" style="color: #60aec1;"></div>
            <div class="option" style="color: #ef525e;"></div>
            <div class="option" style="color: #000000;"></div>
          </div>
        </div>
      </div>
      <div class="buttons">
        <div class="button">Add to cart</div>
        <div class="button colored">Buy now</div>
      </div>
    </div>
    <div class="colorLayer"></div>
    <div class="preview">
      <h1 class="brand">Fila</h1>
      <div class="imgs">
        <img class="activ" src="https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/tenis%2Ffila%2Ft2.png?alt=media&token=f481e143-1e6f-43fd-8ba5-66bb593d8486" alt="img 1"/>
        <img src="https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/tenis%2Ffila%2Ft3.png?alt=media&token=b2352ce3-be90-411d-b112-cfc6453760a0" alt="img 2"/>
        <img src="https://firebasestorage.googleapis.com/v0/b/fotos-3cba1.appspot.com/o/tenis%2Ffila%2Ft1.png?alt=media&token=9b161cad-8068-418e-a0d3-ee2e0975e6f4" alt="img 3"/>
      </div>
      <div class="zoomControl"></div>
      <div class="closePreview"></div>
      <div class="movControls">
        <div class="movControl left"></div>
        <div class="movControl right"></div>
      </div>
    </div>
  </div>
</section>
    )
}
export default CartVista