const router = require("express").Router()
const authController = require("../controllers/authController")
const middleware = require("../middleware")

router.post("/", authController.register)

router.post("/login", authController.Login)

router.get(
  "/session",
  middleware.stripToken,
  middleware.verifyToken,
  authController.checkSession
)
router.get("/", authController.getAll)

module.exports = router
