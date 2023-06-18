import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import '../App.css'
import { BrowserRouter, Routes, Route,NavLink,useLocation,useNavigate, redirect } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  var Global = {
    playlistLimit: 50,
    songLimit: 100,
    access_token: "",
    refresh_token: "",
    redirect_uri : "https://kevin-contreras.github.io/spotify",
    client_id : "2a29cfd392b3478aa150dd47c4814b76",
    client_secret : "bf7bed7ea7ae42448d31f0c416a10892",
    scopes : "user-read-playback-state ugc-image-upload user-modify-playback-state user-read-currently-playing user-follow-modify user-read-email"
}
let navigate = useNavigate();
const location = useLocation();

useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const spotyCode = urlParams.get("code");
    alert(spotyCode)
    if (spotyCode) {
        autenticateUser(spotyCode)

    }
},[])

const autenticateUser = (spotyCode) => {
    try {
        const searchParams = new URLSearchParams({
            code: spotyCode,
            grant_type: "authorization_code",
            redirect_uri: Global.redirect_uri,
            client_id: Global.client_id,
            client_secret: Global.client_secret,
        });
        axios.post("https://accounts.spotify.com/api/token", searchParams).then(res => {
            localStorage.setItem('access_token', res.data.access_token);
            localStorage.setItem('refresh_token', res.data.refresh_token);
            navigate("/user")
        })
    } catch (error) {
        console.log(error);
    }


}

  return (
    <div>



    </div>
      
  )
}

export default App
