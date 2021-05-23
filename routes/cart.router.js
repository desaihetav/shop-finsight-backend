const express = require('express');
const router = express.Router();
const { Cart } = require('../models/cart.model');

router.route('/')
  .post(async (req, res) => {
    try {
      const newCartItem = new Cart(req.body);
      const savedCartItem = await newCartItem.save();
      res.json({ cartItem: savedCartItem, success: true, message: 'Added item in cart' });
    } catch (error) {
      console.log(error);
      res.json({ success: false, message: 'Error adding item in cart' });
    }
  });

router.route('/:userId/:productId')
  .post(async (req, res) => {
    const { type, quantity } = req.body;
    const { userId, productId } = req.params;
    try {
      const updated = quantity === 0 ? await Cart.findOneAndRemove({ owner: { _id: userId }, product: { _id: productId } }) :
        await Cart.findOneAndUpdate({ owner: { _id: userId }, product: { _id: productId } }, { quantity })
      res.json({ success: true, updatedCartItem: updated, message: 'Quantity updated' })
    } catch (error) {
      console.log(error);
      res.json({ success: false })
    }
  })

  router.route('/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    try {
      const userCart = await Cart.find({owner: {_id: userId}}).populate('product').exec()
      res.json({ success: true, cart: userCart, message: 'Quantity updated' })
    } catch (error) {
      console.log(error);
      res.json({ success: false })
    }
  })

module.exports = router;