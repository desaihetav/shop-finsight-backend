const mongoose = require("mongoose");
const { Schema } = mongoose;
require('mongoose-type-url');

// Possible Improvements
// 1. Generate slug automatically, probably using regex
// (Eg: Morgan Housel ––> morgan-housel)

const PublisherSchema = new Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    required: 'Cannot add publisher without slug'
  },
  name: {
    type: String,
    required: "Cannot add unnamed publisher.",
  },
  photo_url: {
    type: mongoose.SchemaTypes.Url,
    // required: "Cannot add publisher without valid url.",
  },
  description: {
    type: String,
    // minLength: [10, "The description must be at least 100 characters long"],
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, { timestamps: true });


PublisherSchema.statics.findOneOrCreateWith = async function findOneOrCreateWith(condition, doc) {
    const one = await this.findOne(condition);
    return one || this.create(doc);
};


const Publisher = mongoose.model("Publisher", PublisherSchema);
module.exports = { Publisher }