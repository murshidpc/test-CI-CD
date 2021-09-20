const express = require('express')
const serverlessHtpp = require('serverless-http')

const app = express();

app.get('/test', (req, res) => {
  console.log(req.url)
  res.status(200).send('OK')
})

module.exports.handler = serverlessHtpp(app)
