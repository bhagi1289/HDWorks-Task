const express = require('express')
const sls = require('serverless-http')
const fw = require("./controller")
const app = express()
app.get('/fanfight', async (req, res, next) => {
  try {
    let discountPercentage = req.query.percentage;
    let bonus = req.query.bonus || null;
    let entryFee = req.query.entryFee || null;
    let deposit = req.query.deposit || null;
    let winnings = req.query.winnings || null;

    if (discountPercentage>=0 && discountPercentage<=100)
      res.status(200).json(fw.calculateFanFightWallet(discountPercentage, entryFee, bonus, deposit, winnings));
    else
      res.status(400).json({message: "Discount Percentage should be between 0 - 100"})
  } catch (error) {
    res.status(400).json(error.message);
  }
})
module.exports.server = sls(app)