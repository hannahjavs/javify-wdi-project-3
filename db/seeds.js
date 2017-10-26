const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Plan      = require('../models/plan');

const planData = [{
  title: 'Hackney Halloween Run',
  location: 'Hackney Canal',
  timeOfDay: 'Morning',
  image: 'turn into image upload',
  date: 26/10/17,
  playlist: 'import playlist from spotify'
}];

// const userData = [{
//   // SPOTIFY DATA
// }];

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Plan.create(planData))
  .then(plans => console.log(`${plans.length} plans created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());