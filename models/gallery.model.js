const mongoose = require('mongoose');

const gallery = mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  image: {
    url: String,
    id: String,
  },
});

module.exports = mongoose.model('gallery', gallery);
