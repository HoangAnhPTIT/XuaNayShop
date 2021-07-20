const { productModel } = require('../model')

async function create(req, res) {
  let product = req.body.product
  productModel.create(product, (err, data) => {
    if (err) res.status(422).json(err)
    res.json(data)
  })
}
async function findAll(req, res) {
  await productModel.find((err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function findOne(req, res) {
  const productId = req.params.id;
  await productModel.findById(productId, (err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function update(req, res) {
  const id = req.params.id
  const filter = { _id: id };
  const product = req.body.product

  let productUpdated = await productModel.updateOne(filter, {$set:product})
  res.json({ productUpdated })
}

module.exports = {
  create,
  findAll,
  findOne,
  update
}