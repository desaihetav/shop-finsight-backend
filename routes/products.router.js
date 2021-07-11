const express = require("express");
const router = express.Router();
const { Author } = require("../models/author.model")
const { Genre } = require("../models/genre.model")
const { Publisher } = require("../models/publisher.model")
const { Product } = require("../models/product.model")
const { extend } = require("lodash")


router.route("/")
  .get(async (req, res) => {
    try {
      const products = await Product.find({}).populate('authors').populate('genres').populate('publisher');
      res.json({ success: true, products })
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to get products", errorMessage: err.message })
    }

  })
  .post(async (req, res) => {
    try {
      const { authors, genres, publisher, product } = req.body;

      const savedAuthors = await Promise.all(authors.map(async (newAuthor) => await Author.findOneOrCreateWith({ name: newAuthor.name }, newAuthor)))

      const savedGenres = await Promise.all(genres.map(async (newGenre) => await Genre.findOneOrCreateWith({ name: newGenre.name }, newGenre)))

      const savedPublisher = await Publisher.findOneOrCreateWith({ name: publisher.name }, publisher);

      const newProduct = new Product({
        ...product,
        authors: savedAuthors,
        genres: savedGenres,
        publisher: savedPublisher._id,
      });

      const savedProduct = await newProduct.save();

      res.json({ success: true, product: savedProduct, authors: savedAuthors, genres: savedGenres, publisher: savedPublisher });
      res.json({ success: true });
    } catch (err) {
      res.status(500).json({ success: false, message: "unable to add products", errorMessage: err.message })
    }
  })

router.param("productId", async (req, res, next, productId) => {
  try {
    const product = await Product.findById(productId).populate('publisher');

    if (!product) {
      return res.status(400).json({ success: false, message: "error getting product" })
    }

    req.product = product;
    next();
  } catch {
    res.status(400).json({ success: false, message: "error while retrieving the product" })
  }
})

router.route("/:productId")
  .get((req, res) => {
    const { product } = req;
    product.__v = undefined;
    res.json({ success: true, product, message: 'product found in DB' })
  })
  .post(async (req, res) => {
    const productUpdates = req.body;
    let { product } = req;

    product = extend(product, productUpdates);
    product = await product.save();

    res.json({ success: true, product })
  })
  .delete(async (req, res) => {
    const { product } = req;

    const deletedProduct = await product.remove();
    res.json({ success: true, product: deletedProduct, message: 'product deleted successfully' });
  })


module.exports = router