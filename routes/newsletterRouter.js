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

router.put(
  '/update/:id',
  middleware.stripToken,
  middleware.verifyToken,
  middleware.isAdmin,
  NewsletterController.updateNewsletter
)

module.exports = router
