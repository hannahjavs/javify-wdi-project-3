const router = require('express').Router();
const plans  = require('../controllers/plan');
// const auth  = require('../controllers/auth');
const oauth  = require('../controllers/oauth');
// const secureRoute = require('../lib/secureRoute');

router.route('/plans')
  .get(plans.index);
//   .post(secureRoute, foods.create);
//
// router.route('/foods/:id')
//   .get(foods.show)
//   .put(secureRoute, foods.update)
//   .delete(secureRoute, foods.delete);

// router.route('/register')
//   .post(auth.register);
//
// router.route('/login')
//   .post(auth.login);

router.route('/oauth/spotify')
  .post(oauth.spotify);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
