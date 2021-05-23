const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');

router.route('/')
  .post(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (user) {
      console.log("here");
      user.password === password ? res.json({ user, success: true, message: "Login Successful." }) : res.json({ user: null, success: false, message: "Invalid Password. Please try again." });
    }
    res.json({ user: null, status: false, message: "No account found with entered email id." });
  });

module.exports = router;