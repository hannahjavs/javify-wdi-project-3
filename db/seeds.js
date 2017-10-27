const mongoose   = require('mongoose');
mongoose.Promise = require('bluebird');

const { dbURI } = require('../config/environment');
const Plan      = require('../models/plan');

const planData = [{
  title: 'Hackney Halloween Run',
  location: 'Hackney Canal',
  start: Number,
  end: Number,
  date: '10/01/05',
  playlist: 'get from spotify',
  genre: 'Soft Rock',
  difficulty: 'Medium',
  image: 'http://www.georgejamesphotography.com/img/s/v-3/p996087014-3.jpg'
  // postedBy: mongoose.Schema.ObjectId
}];

// const userData = [{
//   // SPOTIFY DATA
// }];``

mongoose.connect(dbURI, { useMongoClient: true })
  .then(db => db.dropDatabase())
  .then(() => Plan.create(planData))
  .then(plans => console.log(`${plans.length} plans created!`))
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
