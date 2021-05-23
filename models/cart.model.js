const mongoose = require("mongoose");
require('mongoose-type-url');
const { Schema } = mongoose;

const CartSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  // total: {
  //   type: Number,
  //   default: 0,
  // },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    default: 1
  }
}, { timestamps: true });


const Cart = mongoose.model("Cart", CartSchema);
module.exports = { Cart }