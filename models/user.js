const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  spotifyId: { type: String }
});

// REMEMBER THIS: !this.spotifyId
// userSchema.pre('validate', function checkPassword(next) {
//   if(!this.password && !this.spotifyId) {
//     this.invalidate('password', 'Password is required');
//   }
//   if(!this.password && this._passwordConfirmation !== this.password) {
//     this.invalidate('passwordConfirmation', 'Passwords do not match');
//   }
//   next();
// });

module.exports = mongoose.model('User', userSchema);
