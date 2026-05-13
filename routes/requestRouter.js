const router = require("express").Router()

const requestController = require("../controllers/requestController")

router.post("/", requestController.createRequest)
router.get("/", requestController.getAllRequest)

module.exports = router
