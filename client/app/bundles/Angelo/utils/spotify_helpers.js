import axios from 'axios'

const uri = "https://api.spotify.com/"

export const fetchAllPlaylists = (user) => {
  let url = uri + "v1/me/playlists"

  let headers = {
    'Content-type': 'application/json',
    'Authorization': `Bearer ${user.token}`
  }

  return axios.get(url,  { headers })
   .then(response =>  {
    return response.data.items
   })
   .catch( err => {
     console.dir(err);
     if(err.response.status === 401) {
       console.log("Need to Refresh User Token");
     }
   })
}
