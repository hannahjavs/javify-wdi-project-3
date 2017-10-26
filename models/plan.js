const mongoose = require('mongoose');

const planSchema = mongoose.Schema({
  title: { type: String, required: 'Title is required' },
  location: { type: String, required: 'Title is required' },
  timeOfDay: { type: String, required: 'Category is required' },
  image: { type: String, required: 'Image is required' },
  date: { type: String, required: 'Image is required' },
  playlist: { type: String, required: 'Image is required' },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'}

});

module.exports = mongoose.model('plan', planSchema);
