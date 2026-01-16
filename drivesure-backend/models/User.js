const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true
  },
  // Additional profile info relevant to a driving app
  phoneNumber: {
    type: String,
    trim: true
  },
  licenseNumber: {
    type: String,
    trim: true
  },
  vehicleDetails: {
    make: String,
    model: String,
    year: Number,
    licensePlate: String,
    vin: String
  },
  // To link easily with existing String userId fields in other models if needed, 
  // though typically _id is used.
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
