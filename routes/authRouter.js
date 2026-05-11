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
router.get(
  "/",
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  authController.getAll
)
router.get("/partner", authController.getPartner)

router.get("/admin", authController.getAdmin)
router.get("/:id", authController.getStaffById)
router.put("/:id", authController.updateStaff)
router.delete("/:id", authController.deleteStaff)

module.exports = router
