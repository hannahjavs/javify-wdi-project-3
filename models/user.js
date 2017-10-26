const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: { type: String }, // .display_name
  email: { type: String },
  followers: { type: String }, // .total
  spotifyId: { type: String },
  image: { type: String }
});

module.exports = mongoose.model('User', userSchema);









// HANNAH SPOTIFY DATA
// {
//   "display_name" : "Hannah Javs",
//   "external_urls" : {
//     "spotify" : "https://open.spotify.com/user/hannahsiujadavji"
//   },
//   "followers" : {
//     "href" : null,
//     "total" : 1
//   },
//   "href" : "https://api.spotify.com/v1/users/hannahsiujadavji",
//   "id" : "hannahsiujadavji",
//   "images" : [ {
//     "height" : null,
//     "url" : "https://scontent.xx.fbcdn.net/v/t1.0-1/p200x200/21558660_891030534387212_6727342308794397567_n.jpg?oh=2096f6494ab82d717a6cee90c7804050&oe=5A670FEB",
//     "width" : null
//   } ],
//   "type" : "user",
//   "uri" : "spotify:user:hannahsiujadavji"
// }



// DANNY SPOTIFY DATA:

// {
//   "display_name" : null,
//   "external_urls" : {
//     "spotify" : "https://open.spotify.com/user/daniuber89london"
//   },
//   "followers" : {
//     "href" : null,
//     "total" : 3
//   },
//   "href" : "https://api.spotify.com/v1/users/daniuber89london",
//   "id" : "daniuber89london",
//   "images" : [ ],
//   "type" : "user",
//   "uri" : "spotify:user:daniuber89london"
// }
