const Newsletter = require('../models/Newsletter')
const User = require('../models/User')
const addNewsletter = async (req, res) => {
  try {
    const newsletter = await Newsletter.create({
      coverImage: req.body.coverImage,
      month: req.body.month,
      year: req.body.year,
      volume: req.body.volume,
      issue: req.body.issue,
      description: req.body.description,
      letterLink: req.body.letterLink,
    })
    res.send(newsletter)
  } catch (error) {
    console.error(error.msg)
    res.status(404).send({
      status: 'Error',
      msg: 'An error has occurred!!',
      error: error.msg,
    })
  }
}

const getAllNewsletters = async (req, res) => {
  try {
    const newsletters = await Newsletter.find({})
    res.send(newsletters)
  } catch (error) {
    console.error(error.msg)
    res.status(404).send({
      status: 'Error',
      msg: 'An error has occurred!!',
      error: error.msg,
    })
  }
}

const updateNewsletter = async (req, res) => {
  try {
    const updatedNewsletter = await Newsletter.findByIdAndUpdate(
      req.params.id,
      req.body,
      { returnDocument: 'after' }
    )

    res.status(200).send(updatedNewsletter)
  } catch (error) {
    console.error(
      '⚠️ An error has occurred updating newsletter!',
      error.message
    )
    res.status(404).send({
      status: 'Error',
      msg: 'An error has occurred!!',
      error: error.msg,
    })
  }
}

// {
// 	"coverImage": "https://i.imgur.com/mytf4jg.png",
// 	"month": "December",
// 	"year": "2025",
// 	"volume": "1",
// 	"issue": "12",
// 	"description": "The 11th issue of Ra'edat Puls highlights key moments from December, celebrating Bahraini Women's Day through Threads of Gold, while featuring a special Women's Month spotlight on Eman Almannai. This edition also marks Bahrain National Day, reflecting on heritage, unity, and pride, and closes the year with warm wishes for a Happy New Year.",
// 	"letterLink": "https://designrr.page/?id=473851&token=3990550667&type=FP&h=7882"
// }

module.exports = {
  addNewsletter,
  getAllNewsletters,
  updateNewsletter,
}
