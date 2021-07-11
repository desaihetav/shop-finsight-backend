const mongoose = require("mongoose");
require('mongoose-type-url');
const { Schema } = mongoose;

const GenreSchema = new mongoose.Schema({
  slug: {
    type: String,
    lowercase: true,
    unique: true,
    required: 'Cannot add genre without slug'
  },
  name: {
    type: String,
    required: "Cannot add unnamed genre",
  },
  photo_url: {
    type: mongoose.SchemaTypes.Url,
    // required: "Cannot add genre without valid photo url",
  },
  description: {
    type: String,
    // minLength: [100, "The description must be at least 100 characters long"],
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}, { timestamps: true });


GenreSchema.statics.findOneOrCreateWith = async function findOneOrCreateWith(condition, doc) {
    const one = await this.findOne(condition);
    // console.log({one})
    return one || this.create(doc);
};


const Genre = mongoose.model("Genre", GenreSchema);
module.exports = { Genre }