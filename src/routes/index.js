const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  res.status(200).send({
    msg: "Hello!"
  })
})

router.get('/ping/', (req, res) => {
  res.status(200).send({
    msg: "pong",
  })
})

module.exports = router
