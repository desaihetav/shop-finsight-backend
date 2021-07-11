const mongoose = require("mongoose");
require('mongoose-type-url');
const { Schema } = mongoose;

// Possible Improvements
// 1. Generate slug automatically, probably using regex
// (Eg: Morgan Housel ––> morgan-housel)

const AuthorSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    required: 'Cannot add author without slug'
  },
  name: {
    type: String,
    required: "Cannot add unnamed author.",
  },
  photo_url: {
    type: mongoose.SchemaTypes.Url,
    // required: "Cannot add author without valid photo url.",
  },
  description: {
    type: String,
    minLength: [10, "The description must be at least 100 characters long"],
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, { timestamps: true });


AuthorSchema.statics.findOneOrCreateWith = async function findOneOrCreateWith(condition, doc) {
    const one = await this.findOne(condition);
    return one || this.create(doc);
};


const Author = mongoose.model("Author", AuthorSchema);
module.exports = { Author }