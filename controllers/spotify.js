const rp = require('request-promise');


// GET MULTIPLE PLAYLISTS FROM SPOTIFY
function getPlaylists(req, res, next) {
  return rp({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'refresh_token',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      refresh_token: req.query.token
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  })
    .then(token => {
      return rp({
        method: 'GET',
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: {
          'Authorization': `Bearer ${token.access_token}`
        },
        json: true
      });
    })
    .then(response => res.json(response))
    .catch(next);
}


// GET A PLAYLIST FROM A USERS SPOTIFY USING THE PLAYLIST ID
function getPlaylist(req, res, next) {
  return rp({
    method: 'POST',
    url: 'https://accounts.spotify.com/api/token',
    form: {
      grant_type: 'refresh_token',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      refresh_token: req.query.token
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    json: true
  })
    .then(token => {
      return rp({
        method: 'GET',
        url: `https://api.spotify.com/v1/users/${req.query.spotifyId}/playlists/${req.params.playlistId}`,
        headers: {
          'Authorization': `Bearer ${token.access_token}`
        },
        json: true
      });
    })
    .then(response => {
      // console.log(response);
      res.json(response);
    })
    .catch(err => {
      // console.log("ERROR =========>", err);
      next(err);
    });
}

// EXPORT PLAYLISTS!
module.exports = { getPlaylists, getPlaylist };
