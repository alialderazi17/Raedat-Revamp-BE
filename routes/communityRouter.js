const router = require("express").Router()
const middleware = require("../middleware")
const communityControllers = require("../controllers/communityController")
router.post("/", communityControllers.createCommunity)
router.get("/", communityControllers.getAllCommunity)
module.exports = router
