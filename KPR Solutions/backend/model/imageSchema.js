const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    filename: String,
    filepath: String,
    caption: String,
  });

module.exports = mongoose.model('Image', imageSchema);