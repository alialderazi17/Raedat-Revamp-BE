const Community = require("../models/Community")

const createCommunity = async (req, res) => {
  try {
    const alreadyFound = await Community.exists({
      communityName: req.body.communityName,
    })
    if (alreadyFound) {
      return res.send("This community already exists !")
    } else {
      const newCommunity = await Community.create({
        communityName: req.body.communityName,
        description: req.body.description,
        memberCount: req.body.memberCount,
        private: req.body.private,
      })
      res.send(newCommunity)
    }
  } catch (error) {
    res.send(`error: ${error}`)
  }
}

const getAllCommunity = async (req, res) => {
  try {
    const communities = await Community.find({})
    res.send(communities)
  } catch (error) {
    res.send(`error: ${error}`)
  }
}

module.exports = { createCommunity, getAllCommunity }
