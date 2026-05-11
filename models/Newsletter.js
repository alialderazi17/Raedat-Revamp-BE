const mongoose = require('mongoose')

const newsletterSchema = new mongoose.Schema(
  {
    coverImage: { type: String },
    month: { type: String, required: true },
    year: { type: String, required: true },
    volume: { type: String, required: true },
    issue: { type: String, required: true },
    description: { type: String },
    letterLink: { type: String },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Newsletter', newsletterSchema)
