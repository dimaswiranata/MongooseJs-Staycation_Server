const mongoose = require('mongoose');

// inisialisasi object category Schema
const categorySchema = new mongoose.Schema({ 
  name: {
    type : String,
    required: true
  },
});

// inisialisasi model Category dari categorySchema
module.exports = mongoose.model('Category', categorySchema);