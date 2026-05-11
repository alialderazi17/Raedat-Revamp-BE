const User = require("../models/User")
const middleware = require("../middleware")

const register = async (req, res) => {
  try {
    const { fullName, email, password, role } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    let existingUser = await User.exists({ email })
    if (existingUser) {
      return res
        .status(400)
        .send("A user with that email has already been registered!!")
    } else {
      const user = await User.create({
        fullName,
        email,
        passwordDigest,
        role,
      })
      res.send(user)
    }
  } catch (error) {
    throw error
  }
}
const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    let matched = await middleware.comparePassword(
      password,
      user.passwordDigest
    )
    if (matched) {
      let payload = {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
      let token = middleware.createToken(payload)
      return res.send({ user: payload, token })
    }
    res.status(401).send({ status: "Error", msg: "Unauthorized" })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: "Error", msg: "An error has occurred!!" })
  }
}
const checkSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
const getAll = async (req, res) => {
  try {
    const user = await User.find({})
    res.send(user)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}
const getAdmin = async (req, res) => {
  try {
    const adminMembers = await User.find({ role: "admin" })
    res.json(adminMembers)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
const getPartner = async (req, res) => {
  try {
    const partners = await User.find({ role: "partner" })
    res.json(partners)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getStaffById = async (req, res) => {
  try {
    const staff = await User.findById(req.params.id)
    if (!staff) return res.status(404).json({ message: "Member not found" })
    res.json(staff)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateStaff = async (req, res) => {
  try {
    let updates = req.body

    if (updates.password) {
      updates.passwordDigest = await middleware.hashPassword(updates.password)
      delete updates.password
    }

    const updatedStaff = await User.findByIdAndUpdate(req.params.id, updates, {
      new: true,
    })

    if (!updatedStaff)
      return res.status(404).json({ message: "Member not found" })

    res.json(updatedStaff)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteStaff = async (req, res) => {
  try {
    const deleted = await User.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: "Member not found" })
    res.json({ message: "Deleted successfully" })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  Login,
  checkSession,
  getAll,
  register,
  getPartner,
  getAdmin,
  getStaffById,
  updateStaff,
  deleteStaff,
}
