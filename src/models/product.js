const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    default: "No Name",
  },
  type: {
    type: String,
    default: "No Type",
  },
});

module.exports = mongoose.model("product", productSchema, "product");
