const Event = require("../models/Event")

const createEvent = async (req, res) => {
  try {
    const { title, date, time, location, RSVP } = req.body
    const event = await Event.create({
      title,
      date,
      time,
      location,
      RSVP,
    })
    res.send(event)
  } catch (error) {
    console.error("Create event Error:", error)
    res.status(400).json({ error: error.message })
  }
}

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await Event.find()
    res.send(allEvents)
  } catch (error) {
    console.error("cant gets all event Error:", error)
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createEvent,
  getAllEvents,
}
