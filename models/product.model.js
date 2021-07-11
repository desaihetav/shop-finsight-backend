const mongoose = require("mongoose");
const { Schema } = mongoose;
require('mongoose-type-url');
const relationship = require('mongoose-relationship')

// Possible Improvements
// 1. Generate slug automatically, probably using regex or checkout 'slug' package
// (Eg: The Psychology of Money ––> the-psychology-of-money)

const ProductSchema = new Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    required: 'Cannot add product without slug'
  },
  name: {
    type: String,
    required: "Cannot add unnamed product.",
  },
  description: {
    type: String,
    minLength: [100, "The description must be at least 100 characters long"],
  },
  cover_url: {
    type: mongoose.SchemaTypes.Url,
    required: "Cannot add product without valid url.",
  },
  isbn10: {
    type: String,
    required: "ISBN10 must be exactly 10 characters long",
    minLength: 10,
    maxLength: 10,
  },
  isbn13: {
    type: String,
    required: "ISBN13 must be exactly 10 characters long",
    minLength: 13,
    maxLength: 14,
  },
  authors: [{
    type: Schema.Types.ObjectId,
    ref: 'Author',
    childPath: 'products'
  }],
  publisher: {
    type: Schema.Types.ObjectId,
    ref: 'Publisher',
    childPath: 'products'
  },
  // offers: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Offer'
  // }],
  page_count: {
    type: Number,
  },
  publish_date: {
    type: Date,
    required: "Cannot add product without publish date",
  },
  languages: [{
    type: String,
    required: "Cannot add product without language",
  }],
  genres: [{
    type: Schema.Types.ObjectId,
    ref: 'Genre',
    childPath: 'products'
  }],
  rating: {
    type: Number,
    default: 0,
  },
  rating_count: {
    type: Number,
    default: 0,
  },
  purchase_count: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: 'Cannot add product without price'
  },
  discount: {
    type: Number,
    min: 0,
    max: 99,
    required: 'Discount value must be in range of 0 to 99'
  },
  weight: {
    type: Number,
    min: 5,
    max: 1000,
    required: 'Weight value must be in range of 5 to 500 grams',
  },
  dimensions: {
    type: String,
    required: 'Cannot add product without dimensions'
  },
  has_fast_delivery: {
    type: Boolean,
    required: 'Cannot add product without value of fast delivery criteria'
  },
  has_pay_on_delivery: {
    type: Boolean,
    required: 'Cannot add product without value of pay on delivery criteria'
  },
  quantity: {
    type: Number,
    required: 'Cannot add product without quantity'
  }
}, { timestamps: true });


ProductSchema.plugin(relationship, { relationshipPathName:['authors', 'publisher', 'genres'] });


const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product }