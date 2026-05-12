const router = require("express").Router()
const middleware = require("../middleware")
const NewsletterController = require("../controllers/newsletterController")

router.post(
  "/",
  middleware.upload.single("coverImage"),
  // middleware.stripToken,
  // middleware.verifyToken,
  // middleware.isAdmin,
  (req, res, next) => {
    console.log(req)
    console.log(req.file)
    res.send("SUCESS")
    next()
  },
  NewsletterController.addNewsletter
)

router.get("/", NewsletterController.getAllNewsletters)

router.put(
  "/:id",

  NewsletterController.updateNewsletter
)

router.delete(
  "/:id",

  NewsletterController.deleteNewsletter
)

module.exports = router
