const express = require("express")
// const User = require("../models/user")
const router = express.Router()

router.post("/", async (req, res, next) => {
  try {
    const user = await User.login(req.body)
    return res.status(200).json({ user })
  } catch (err) {
    next(err)
  }
})

router.get("/", async (req, res, next) => {
    try {
      const user = await User.login(req.body)
      return res.status(200).json({ user })
    } catch (err) {
      next(err)
    }
  })

  

module.exports = router
  