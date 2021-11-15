const express = require('express')
const sls = require('serverless-http')
const fw = require("./controller")
const app = express()
app.get('/fanfight', async (req, res, next) => {
  try {
    let discountPercentage = req.query.percentage;
    if (discountPercentage>=0 && discountPercentage<=100)
      res.status(200).json(fw.calculateFanFightWallet(discountPercentage));
    else
      res.status(400).json({message: "Discount Percentage should be between 0 - 100"})
  } catch (error) {
    res.status(400).json(error.message);
  }
})
module.exports.server = sls(app)