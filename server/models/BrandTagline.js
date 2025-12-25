const mongoose = require("mongoose");

const brandTaglineSchema = new mongoose.Schema({
  taglineEnglish: {
    type: String,
    required: true
  },
  taglineMalayalam: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("BrandTagline", brandTaglineSchema);
