import { useEffect, useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import '../App.css'
import '../inicio.css'
import '../imagen.css'

import { BrowserRouter, Routes, Route,NavLink } from "react-router-dom";
import axios from 'axios';
import CircularIndeterminate from './cargador';
import { getRefreshedAccesToken } from '../token';
import YouTubeVideo from './video';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
let solucion=false
const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
 
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: 343,
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor:
    theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.7)' : 'rgba(255,255,255,0.2)',
  backdropFilter: 'blur(40px)',
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

function Usuario (){
let [data, setImg] = useState({})
let [music,setMusic] = useState([])
let [cargador,setCargador] = useState(false)
let [video,setVideo] = React.useState("")

  const theme = useTheme();
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(true);
  const [frames, setFrame] = React.useState(false);
  const [nombre, setNombre] = React.useState("");

  function formatDuration(value) {
    const minute = Math.floor((value/1000) / 60);
    const secondLeft = Math.floor((value/1000) - minute * 60);
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }
  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

useEffect( ()=>{
    setCargador(false)

    getRefreshedAccesToken()
    let access_token = localStorage.getItem('access_token');

    axios.get("https://api.spotify.com/v1/me",{
      headers:{
          "Authorization": "Bearer " + access_token,
      }
    }).then((res)=>{
      setImg({
         imagen: res.data.images[0].url,
         nombre:res.data.display_name,
         usuario: res.data.id
      })
  
    }).then(function(err){
        console.log(err)
    })
  axios.get("https://api.spotify.com/v1/me/player/recently-played",{
      headers:{
          "Authorization": "Bearer " + access_token
      }
  }).then(function(res){
      setMusic(res.data.items)
      setCargador(true)

  }).catch(function(err){
    setCargador(true)
      console.log(err)
  })
  
},[])

    return(

<div>
    {cargador==false?<div ><CircularIndeterminate/></div>:<div  > 
      <div className='contenedor'>
      <img src={data.imagen} className='imagen' alt=""   />
<div className='texto'>{data.nombre}</div>
      </div>


    <div style={{textAlign:"center",width:"100%"}}>

        { music.map(function(item){

    return<div className='item2' > <div className='item'>
        <Box sx={{ width: '100%' }}>
      <Widget style={{position:"static"}}>
        <Box sx={{ display: 'flex', alignItems: 'center' ,position:"static"}}>
          <CoverImage>
            <img
              src=  {item.track.album.images[0].url}    

            />
          </CoverImage>
          <Box sx={{ ml: 1.5, minWidth: 0 }}>
            <Typography variant="caption" color="white" fontWeight={500}>
            {item.track.name}
            </Typography>
         
            <Typography noWrap letterSpacing={-0.25} color="white">
            {item.track.artists[0].name}
            </Typography>
          </Box>
        </Box>

       
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: -1,
          }}
        >
      
       <IconButton
            aria-label={paused ? 'play' : 'pause'}
            id={item.track.artists[0].name+"-"+item.track.name}
            onClick={async() => {
              setPaused(!paused) 
           


                const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                  params: {
                    key: "AIzaSyDDIAart_ay4Tkmlg-5LKXZh0EgmA88w8c",
                    q: item.track.artists[0].name+"-"+item.track.name,
                    part: 'snippet',
                    type: 'video',
                    maxResults: 1,
                  },
                });
                console.log(response)
               
                const videoLink = `https://www.youtube.com/embed/${response.data.items[0].id.videoId}?autoplay=1`;
                setVideo(videoLink)

             
           
            
            }}
          >
           
       
         <PlayArrowRounded
        
          sx={{ fontSize: '3rem' }}
          htmlColor={"white"}
        /> 
        
                   
          </IconButton>
     
        
        
        </Box>
    
      </Widget>

      <WallPaper />


    </Box>
        </div>
        </div>

})}
    </div>
</div>}
<YouTubeVideo clickVideo={video}/>
</div>
    )
}
export default Usuario