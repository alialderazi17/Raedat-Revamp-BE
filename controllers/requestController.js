const Request = require("../models/Request")
const User = require("../models/User")
const createRequest = async (req, res) => {
  try {
    const { companyName, number, email, message } = req.body
    let existingUser = await User.exists({ email })
    if (existingUser) {
      return res
        .status(400)
        .send("A user with that email has already been registered!!")
    } else {
      const request = await Request.create({
        companyName,
        number,
        email,
        message,
      })
      res.send(request)
    }
  } catch (error) {
    console.error("Create request Error:", error)
    res.status(400).json({ error: error.message })
  }
}

const getAllRequest = async (req, res) => {
  try {
    const allrequest = await Request.find()
    res.send(allrequest)
  } catch (error) {
    console.error("cant gets all request Error:", error)
    res.status(400).json({ error: error.message })
  }
}

module.exports = {
  createRequest,
  getAllRequest,
}
