const router = require('express').Router()
const middleware = require('../middleware')
const NewsletterController = require('../controllers/newsletterController')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  NewsletterController.addNewsletter
)

router.get('/', NewsletterController.getAllNewsletters)

module.exports = router
