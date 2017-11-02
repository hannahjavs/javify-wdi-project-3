const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
  title: { type: String, required: 'Title is required' },
  location: { type: String, required: 'Location is required' },
  playlist: { type: String },
  difficulty: { type: String, required: 'Level of difficulty is required' },
  image: { type: String, required: 'Image is required' },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'},
  route: { type: Object },
  markers: { type: Array }
});

module.exports = mongoose.model('Plan', planSchema);




// PLAN:
// title: String
// location: String
// start: { lat: Number, lng: Number }
// end: { lat: Number, lng: Number }
// difficulty: String
// timestamps: true
// comments: [ commentSchema ]
// postedBy: Ref
// playlist: String (id from Spotify)
// genre: String


// COMMENTS:
// postedBy: Ref
// body: String
// rating: Number


// username: String
// email: String
// spotifyId: String
// image: String
// followers: Number
// facebookUrl: String
// githubUrl: String
// twitterUrl: String
// occupation: String
// based: String
// favoriteFood: String
