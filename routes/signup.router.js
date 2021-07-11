const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env['SECRET'];

router.route('/')
  .post(async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const user = await User.findOne({ email: email });

      if (user) {
        return res.json({ status: false, message: "Account with entered email id already exists. Try loggin in instead!" });
      }

      try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ name, email, password: hashedPassword });
        const savedUser = await newUser.save();

        const token = jwt.sign({ userId: savedUser._id }, secret);

        res.json({ user: savedUser, token, success: true, message: 'Signed up successfully.' });
      } catch (error) {
        console.log(error);
        res.json({ success: false, message: 'Something went wrong.' })
      }
    } catch (err) {
      console.log(err);
      res.json({ success: false, message: 'An unknown error occured' });
    }
  })

module.exports = router;