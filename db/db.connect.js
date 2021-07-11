const mongoose = require("mongoose")

const mySecret = process.env['mongo-password']

function initializeDBConnection() {
  mongoose.connect(`mongodb+srv://desaihetav:${mySecret}@finsight-cluster.f3i3p.mongodb.net/shop-finsight?retryWrites=true&w=majority`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
    .then(() => console.log("successfully connected"))
    .catch(error => console.error("mongoose connection failed...", error))
}

module.exports = { initializeDBConnection }

