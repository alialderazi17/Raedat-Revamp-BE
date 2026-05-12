const mongoose = require("mongoose")

const eventsSchema = new mongoose.Schema({
  // title, date, time, location

  title: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    require: true,
  },
  time: {
    type: String,
    require: true,
  },
  location: {
    // In-person and online event labels
    type: String,
    require: true,
  },
  RSVP: {
    type: Number,
    require: true,
    default: 0,
  },
  capacity: {
    type: Number,
  },

  // host: {
  //    type: mongoose.Schema.Types.ObjectId,
  //    ref: "comiiunity or partener or admin",
  //   require: true,
  // },
  // Hosting community or partner name -> refrence
})

module.exports = mongoose.model("Event", eventsSchema)
