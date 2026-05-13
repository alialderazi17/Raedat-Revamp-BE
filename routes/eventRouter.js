const router = require("express").Router()

const eventController = require("../controllers/eventController")

// const middleware = require("../")

router.post("/", eventController.createEvent)
router.get("/", eventController.getAllEvents)
router.put("/:id", eventController.updateEvent)
router.delete("/:id", eventController.deleteEvent)

module.exports = router
