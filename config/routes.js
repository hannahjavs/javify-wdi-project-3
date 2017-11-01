const router = require('express').Router();
const plans  = require('../controllers/plan');
const oauth  = require('../controllers/oauth');
const spotify  = require('../controllers/spotify');
const secureRoute = require('../lib/secureRoute');
// const user = require('../controllers/user');

router.route('/plans')
  .get(plans.index)
  .post(secureRoute, plans.create);

router.route('/plans/:id')
  .get(plans.show)
  .put(secureRoute, plans.update)
  .delete(secureRoute, plans.delete);

// LOG IN WITH SPOTIFY AUTHENTICATION
router.route('/oauth/spotify')
  .post(oauth.spotify);

// GET USER THAT IS LOGGED IN LISTS OF PLAYLISTS
router.route('/spotify/playlists')
  .get(spotify.getPlaylists);

// GET A SINGLE PLAYLIST AND THE ID FROM THE USERS SPOTIFY ACCOUNT
router.route('/spotify/playlists/:playlistId')
  .get(spotify.getPlaylist);

// ROUTE FOR PROFILE PAGE
// router.route('/users/:id')
//   .all(secureRoute)
//   .get(users.show);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
