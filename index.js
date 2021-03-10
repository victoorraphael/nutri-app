const express = require('express')
const cors = require('cors')
const router = express.Router()

const app = express()
const port = process.env.PORT || 3000

const indexRoute = require('./src/routes/index')

app.use(express.json())
app.use(cors())


app.use('/', indexRoute)

app.listen(port, () => console.log("SERVER RUNNING ON PORT: ", port))
