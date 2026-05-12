const express = require("express")
const cors = require("cors")
const morgan = require("morgan")
const multer = require("multer")

const PORT = process.env.PORT || 3000

const authRouter = require("./routes/authRouter")
const communityRouter = require("./routes/communityRouter")
const newsletterRouter = require("./routes/newsletterRouter")
const eventRouter = require("./routes/eventRouter")

const db = require("./db")
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/uploads", express.static("./uploads"))

app.use("/auth", authRouter)
app.use("/communities", communityRouter)
app.use("/newsletter", newsletterRouter)
app.use("/event", eventRouter)

app.get("/", (req, res) => {
  res.send("Server's Running!")
})

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})
