const express = require('express');
const router = express.Router();
const { User } = require('../models/user.model');

router.route('/')
  .post(async(req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({email: email});
  // add validation for email and password too
  if(user){
    res.json({status: false, message: "Account with entered email id already exists. Try loggin in instead!"});
  } else{

    const newUser = new User({name, email, password});
    const savedUser = await newUser.save();

    res.json({user: savedUser, success: true, message: 'Signed up successfully.'});
  }
  console.log(users);
})

module.exports = router;