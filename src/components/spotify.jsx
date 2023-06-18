import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import data from '/Spotify_Logo_CMYK_Green.png'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../inicio.css'
import axios from "axios"
import { BrowserRouter, Routes, Route,NavLink,useLocation,useNavigate, redirect } from "react-router-dom";

function Spotify (){
    const location = useLocation();
    let navigate = useNavigate();
    let [nombre,setNombre] = useState(0)
    
    var Global = {
        playlistLimit: 50,
        songLimit: 100,
        access_token: "",
        refresh_token: "",
        redirect_uri : "http://localhost:5173/spotify",
        client_id : "2a29cfd392b3478aa150dd47c4814b76",
        client_secret : "bf7bed7ea7ae42448d31f0c416a10892",
        scopes : "user-read-playback-state ugc-image-upload  user-read-recently-played app-remote-control user-read-private playlist-modify-public user-modify-playback-state user-read-currently-playing user-follow-modify user-read-email"
    }
    
    function login(){

        const spoty_url = `https://accounts.spotify.com/authorize?client_id=${Global.client_id}&response_type=code&redirect_uri=${Global.redirect_uri}&scope=${Global.scopes}`;
        window.location.replace(spoty_url)

    }
    return(
<div class="container">
<img src={data} alt="Logo" class="logo"/>

    <h1 class="title">Plump</h1>
    <button onClick={login} class="button">Login with spotify</button>
 </div>
    )
}
export default Spotify