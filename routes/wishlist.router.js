const express = require('express');
const router = express.Router();
const { Wishlist } = require('../models/wishlist.model');

router.route('/:userId/:productId')
  .post(async (req, res) => {
    const { type } = req.body;
    const { userId, productId } = req.params;
    try {
      const wishlistItem = type === "REMOVE" ? await Wishlist.findOneAndRemove({ owner: { _id: userId }, product: { _id: productId } }) :
        await new Wishlist({owner: userId, product: productId}).save();
      res.json({ success: true, wishlistItem: wishlistItem, message: 'Wishlist Updated' })
    } catch (error) {
      console.log(error);
      res.json({ success: false })
    }
  })

router.route('/:userId')
  .get(async (req, res) => {
    const { userId } = req.params;
    try {
      const userWishlist = await Wishlist.find({owner: {_id: userId}}).populate('product').exec()
      res.json({ success: true, wishlist: userWishlist, message: 'Quantity updated' })
    } catch (error) {
      console.log(error);
      res.json({ success: false })
    }
  })

module.exports = router;