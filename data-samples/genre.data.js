const sampleDataWithAllFields = {
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
    required: "Cannot add genre without valid photo url",
  },
  description: {
    type: String,
    minLength: [100, "The description must be at least 100 characters long"],
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: 'Product'
  }]
}

const allGenres = [
  {
    "slug": "business-and-economy",
    "name": "Business and Economy",
    "photo_url": "",
    "description": ""
  },
  {
    "slug": "personal-finance",
    "name": "Personal Finance",
    "photo_url": "",
    "description": ""
  },
  {
    "slug": "investing",
    "name": "Investing",
    "photo_url": "",
    "description": ""
  }
]