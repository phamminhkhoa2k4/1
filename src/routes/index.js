const express = require('express');
const router = express.Router();
const {
  homepage,
  addProduct,
  createProduct,
  updateProductPage,
  deleteProduct,
  updateProduct,
} = require("../controllers/SiteController");
router.get('/', homepage);
router.get('/add-product', addProduct );
router.post('/', createProduct);
router.get('/update-product/:productId',updateProductPage);
router.delete('/:productId', deleteProduct);
router.post('/:productId', updateProduct);
module.exports = router;