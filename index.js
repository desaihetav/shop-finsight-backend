const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require("mongoose")
const cors = require("cors")

const { initializeDBConnection } = require("./db/db.connect.js")
const products = require("./routes/products.router")
const genres = require("./routes/genres.router")
const login = require("./routes/login.router")
const signup = require("./routes/signup.router")
const cart = require("./routes/cart.router")
const wishlist = require("./routes/wishlist.router")

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(cors())

// called before any route handler
initializeDBConnection();

app.use("/products", products);
app.use("/genres", genres);
app.use("/login", login);
app.use("/signup", signup);
app.use("/cart", cart);
app.use("/wishlist", wishlist);

app.get('/', (request, response) => {
  response.json({ hello: "world"})
});

// Error Handler
// Don't move
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "error occured, see the errMessage key for more details", errorMessage: err.message})
})

//  404 Route Handler
//  Note: Do NOT move. This should be the last route
app.use((req, res) => {
  res.status(404).json({ success: false, message: "route not found on server, please check"})
})

app.listen(PORT, () => {
  console.log('server started on port: ', PORT);
});
