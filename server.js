const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const PORT = process.env.PORT || 3000

const db = require('./db')

const authRouter = require('./routes/authRouter')
const communityRouter = require('./routes/communityRouter')
const eventRouter = require('./routes/eventRouter')
const newsletterRouter = require('./routes/newsletterRouter')
const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', authRouter)
app.use('/communities', communityRouter)
app.use('/newsletter', newsletterRouter)

app.use('/event', eventRouter)

app.get('/', (req, res) => {
  res.send("Server's Running!")
})

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}`)
})
