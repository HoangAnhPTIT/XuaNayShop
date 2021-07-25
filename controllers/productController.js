const { productModel, categoryModel } = require('../model')

async function create(req, res) { // Check validate category id
  let product = req.body.product
  productModel.create(product, (err, newProduct) => {
    if (err) res.status(422).json(err)
    categoryModel.findByIdAndUpdate(product.category,
      { $push: { product: newProduct._id } },
      { new: true, useFindAndModify: false },
      (error, category) => {
        if (error) res.status(422).json(err)
      })
    res.json(newProduct)
  })
}
async function findAll(req, res) {
  await productModel.find().populate('categoryId').exec((err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function findOne(req, res) {
  const productId = req.params.id;
  const product = await productModel.findById(productId).populate('category')
  res.json(product)
}

async function update(req, res) {
  const id = req.params.id
  const filter = { _id: id };
  const product = req.body.product

  let productUpdated = await productModel.updateOne(filter, { $set: product })
  res.json({ productUpdated })
}

async function findByCategory(req, res) {
  const categoryId = req.params.categoryId
  await productModel.find({ category: categoryId }, (err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  findByCategory
}