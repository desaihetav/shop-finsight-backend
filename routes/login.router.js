const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env['SECRET']

router.route('/')
  .post(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      const isPasswordCorrect = await bcrypt.compare(password, user.password);

      if (isPasswordCorrect) {
        const token = jwt.sign({ userId: user._id }, secret)
        return res.json({ user, success: true, message: "Login Successful.", token })
      }

      return res.json({ user: null, success: false, message: "Invalid Password. Please try again." });
    }

    return res.json({ user: null, status: false, message: "No account found with entered email id." });
  });

module.exports = router;