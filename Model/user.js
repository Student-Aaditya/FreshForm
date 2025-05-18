// models/Feedback.js
const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    
  },
  mobile: {
    type: String,
  
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  issue: {
    type: String,
    default: '',
  },
  interests: {
    type: [String], // e.g., ["Grocery", "Stationary"]
    default: [],
  },
  deliveryTiming: {
    type: [String], // e.g., ["Morning", "Evening"]
    default: [],
  },
  suggestion: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);
