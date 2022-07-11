const express = require("express")
const Store = require("../models/store")
const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    // const user = await User.login(req.body)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})


module.exports = router
  