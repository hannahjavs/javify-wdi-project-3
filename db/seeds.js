// const mongoose   = require('mongoose');
// mongoose.Promise = require('bluebird');
//
// const { dbURI } = require('../config/environment');
// // const Plan      = require('../models/plan');
// // const User      = require('../models/user');
//
// // const userOneId = mongoose.Types.ObjectId();
//
// // const userData = [{
// //   _id: userOneId,
// //   username: 'Matt', // .display_name
// //   email: 'matt@gmail.com',
// //   followers: 0, // .total
// //   spotifyId: '1188977161',
// //   image: 'profile.jpg'
// // }];
// //
// // const planData = [{
// //   title: 'Hackney Halloween Run',
// //   location: 'Hackney Canal',
// //   playlist: '1jmn5qbZyN7Nly3kLa8G5R',
// //   genre: 'Soft Rock',
// //   difficulty: 'MEDIUM',
// //   image: 'http://www.georgejamesphotography.com/img/s/v-3/p996087014-3.jpg',
// //   createdBy: userData[0]
// // },{
// //   title: 'London Fields Run',
// //   location: 'London Fields Park',
// //   playlist: '1jmn5qbZyN7Nly3kLa8G5R',
// //   genre: 'Reggae',
// //   difficulty: 'EASY',
// //   image: 'https://www.hackneytennis.co.uk/wordpress/wp-content/uploads/2015/11/london_fields_1-1024x683.jpg',
// //   createdBy: userData[0]
// // }];
//
// mongoose.connect(dbURI, { useMongoClient: true })
//   .then(db => db.dropDatabase())
//   // .then(() => Plan.create(planData))
//   // .then(plans => console.log(`${plans.length} plans created!`))
//   // .then(() => User.create(userData))
//   // .then(users => console.log(`${users.length} users created!`))
//   .catch(err => console.log(err))
//   .finally(() => mongoose.connection.close());
