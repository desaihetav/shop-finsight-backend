const mongoose = require("mongoose");
require('mongoose-type-url');
const { Schema } = mongoose;

const WishlistSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
}, { timestamps: true });


const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = { Wishlist }