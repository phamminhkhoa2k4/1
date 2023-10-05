const Product = require('../models/product');

const homepage = (req, res) => {
  Product.find({})
    .then((products) => {
      res.render("home", { products: products });
    })
    .catch((err) => {
      console.log("Error: ", err);
      throw err;
    });
}

const addProduct = (req, res) => {
    res.render('add-product');

}

const  createProduct =  (req, res) => {
    const newProduct = new Product({
        name: req.body.productName,
        type: req.body.productType
    });

    newProduct.save()
        .then(doc => {
            res.redirect('/')
        })
        .catch(err => {
            console.log('Error: ', err);
            throw err;
        });
    }

    const updateProductPage = async (req, res) => {
    try {
        const product = await findByIdAsync(req.params.productId);
        res.render('update-product', { product: product });
    } catch (error) {
        // Handle errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
const deleteProduct = async (req, res) => {
    try {
        const productId = req.params.productId;
        const deletepro = await Product.findByIdAndDelete(productId);
        res.send(deletedpro);
    } catch (error) {
        // Handle errors here
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}
const updateProduct =  async (req, res) => {
    try {
        const productId = req.params.productId;
        await Product.findByIdAndUpdate(
            { _id: productId },
            { $set: { name: req.body.productName, type: req.body.productType } },
            { useFindAndModify: false }
        );
        res.redirect('/');
    } catch (error) {
        // Handle errors here
        console.error(error);
          res.status(500).send('Internal Server Error');
    }
}
module.exports = {
  homepage,
  addProduct,
  createProduct,
  updateProductPage,
  deleteProduct,
  updateProduct,
};