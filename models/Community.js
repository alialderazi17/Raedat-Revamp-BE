const mongoose = require("mongoose")

const CommunitySchema = new mongoose.Schema(
  {
    communityName: { type: String, required: true },
    description: { type: String, required: true },
    memberCount: { type: Number, required: true },
    private: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model("Community", CommunitySchema)
