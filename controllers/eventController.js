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

const updateEvent = async (req, res) => {
  try {
    const updateEvents = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    )

    if (!updateEvents)
      return res.status(404).json({ message: "Event not found" })

    res.json(updateEvents)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "event deleted." })
  } catch (error) {
    console.error("⚠️ An error has occurred deleting event!", error.message)
    res.status(404).send({
      status: "Error",
      msg: "An error has occurred!!",
      error: error.msg,
    })
  }
}

module.exports = {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent,
}
