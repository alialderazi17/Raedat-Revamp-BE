const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const PORT = process.env.PORT || 3000

const authRouter = require("./routes/authRouter")
<<<<<<< HEAD
const eventRouter = require("./routes/eventRouter")

=======
const communityRouter = require("./routes/communityRouter")
>>>>>>> f4edecc2349793dcd32cc2e7a9c2f10c0ce7bcb4
const db = require("./db")
const app = express()

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/auth", authRouter)
<<<<<<< HEAD
app.use("/event", eventRouter)
=======
app.use("/communities", communityRouter)
>>>>>>> f4edecc2349793dcd32cc2e7a9c2f10c0ce7bcb4

app.get("/", (req, res) => {
  res.send("Server's Running!")
})

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})
