const router = require('express').Router();
const plans  = require('../controllers/plan');
const oauth  = require('../controllers/oauth');

router.route('/plans')
  .get(plans.index)
  .post(plans.create);

router.route('/plans/:id')
  .get(plans.show);
// .put(secureRoute, plans.update);
//   .delete(secureRoute, foods.delete);

router.route('/oauth/spotify')
  .post(oauth.spotify);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
