const Newsletter = require("../models/Newsletter")
const User = require("../models/User")
const addNewsletter = async (req, res) => {
  try {
  } catch (error) {
    res.status(404).send({
      status: "Error",
      msg: "An error has occurred!!",
      error: error.msg,
    })
  }
}
