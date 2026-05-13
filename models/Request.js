const mongoose = require("mongoose")

const requestSchema = new mongoose.Schema(
  {
    companyName: { type: String },
    number: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Request", requestSchema)
