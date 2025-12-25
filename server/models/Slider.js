const mongoose = require("mongoose");

const sliderSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  order: {
    type: Number,
    default: 0
  },
  active: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model("Slider", sliderSchema);
