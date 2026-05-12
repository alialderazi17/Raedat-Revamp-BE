const Newsletter = require("../models/Newsletter")
const User = require("../models/User")
const addNewsletter = async (req, res) => {
  try {
    console.log(req.file)
    const newsletter = await Newsletter.create({
      coverImage: req.file.filename,
      month: req.body.month,
      year: req.body.year,
      volume: req.body.volume,
      issue: req.body.issue,
      description: req.body.description,
      letterLink: req.body.letterLink,
    })
    res.send(newsletter)
  } catch (error) {
    console.error(error)
    res.status(500).send({
      status: "Error",
      msg: "An error has occurred!!",
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
      status: "Error",
      msg: "An error has occurred!!",
      error: error.msg,
    })
  }
}

const updateNewsletter = async (req, res) => {
  try {
    const updatedNewsletters = await User.findByIdAndUpdate(
      req.params.id,
      updates,
      {
        new: true,
      }
    )

    if (!updateNewsletters)
      return res.status(404).json({ message: "Newsletter not found" })

    res.json(updateNewsletters)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteNewsletter = async (req, res) => {
  try {
    const newsletter = await Newsletter.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Newsletter deleted." })
  } catch (error) {
    console.error(
      "⚠️ An error has occurred updating newsletter!",
      error.message
    )
    res.status(404).send({
      status: "Error",
      msg: "An error has occurred!!",
      error: error.msg,
    })
  }
}

module.exports = {
  addNewsletter,
  getAllNewsletters,
  updateNewsletter,
  deleteNewsletter,
}
