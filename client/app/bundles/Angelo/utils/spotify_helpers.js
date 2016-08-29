import axios from 'axios'

let uri = "https://api.spotify.com/"

export const fetchAllPlaylists = () => {
  let url = uri + "v1/me/playlists"

  let headers = {
    'Content-type': 'application/json',
    'Authorization': `Bearer BQD-GVDUeI_dLvf0_Oh4x4zlpcVD6a_Kv4avpx7lOEMw2m9ziNsyUmec_Rrw4h_x3JF7OAnxjsyq5bzwh_NCJt_EqrxjyS9gad-q8tKUOmL3QfjxIQuVyqdF5jwhlX8Ma786qAEVbICSKF2XU8A8MiQ32TyFkg`
  }

  return axios.get(url,  { headers })
   .then(response =>  {
    return response.data.items
   })
   .catch((ex) => {
     console.log(ex);
   })
}
