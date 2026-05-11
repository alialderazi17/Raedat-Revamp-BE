const router = require("express").Router()

const eventController = require("../controllers/eventController")

// const middleware = require("../")

router.post("/", eventController.createEvent)
router.get("/", eventController.getAllEvents)

module.exports = router
