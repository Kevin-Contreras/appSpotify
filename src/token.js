import axios from "axios";
import { Buffer } from "buffer";
var Global = {
    playlistLimit: 50,
    songLimit: 100,
    access_token: "",
    refresh_token: "",
    redirect_uri : "http://localhost:5173/",
    client_id : "2a29cfd392b3478aa150dd47c4814b76",
    client_secret : "bf7bed7ea7ae42448d31f0c416a10892",
    scopes : "user-read-playback-state ugc-image-upload user-modify-playback-state user-read-currently-playing user-follow-modify user-read-email"
}
const redirect_uri = Global.redirect_uri;
const client_id = Global.client_id;
const client_secret = Global.client_secret;




export const getRefreshedAccesToken = () => {
  var refresh_token = window.localStorage.getItem("refresh_token");
  axios.post('https://accounts.spotify.com/api/token', new URLSearchParams({
    grant_type: 'refresh_token',
    refresh_token: refresh_token
  }), {
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    }
  }).then(response => {
    return response.data.access_token;
  }).catch(function(err){
  })
}
