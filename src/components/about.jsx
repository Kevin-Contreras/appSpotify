import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import imagen1 from '/imagen1.jpg'
import imagen2 from '/imagen2.jpg'
import '../about.css'

function About (){
  const [file, setFile] = useState(null);
const [datosText,setDatosText] =useState("")
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit =async (event) => {
event.preventDefault()
if(file){
  const formData = new FormData();
  formData.append('image', file);
let api =  await  fetch("http://localhost:3000/archivo",{
  method:"POST",
  body:  formData

}

)
if(api.ok){
 var dato = await api.text()
setDatosText(dato)
  
  console.log("se ha enviado al servidor :)")
}else{
  console.log("no ha enviado al servidor :(")
}

}
 
    
    // Aquí puedes enviar el archivo al servidor
    // utilizando alguna biblioteca como axios o fetch
  };
    return(
<div>

<div class="wrapper">
  
  <span class="yo"></span>
  <div class="bubble"></div>
</div>

<div class="text">
  <h1>HELLO</h1>
  {(datosText=="")?  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
:datosText}
</div>

<form onSubmit={handleSubmit}  >
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Enviar</button>
    </form>
<div class="credits">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
</div>

    )
}
export default About