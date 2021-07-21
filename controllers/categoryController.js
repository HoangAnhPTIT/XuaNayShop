const { categoryModel, typeProductModel } = require('../model')

async function create(req, res) {
  const body = req.body
  let categoryReq = {
    name: body.name,
    code: body.code,
    product: body.product
  }
  const category = new categoryModel(categoryReq)
  await category.save((err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function findAll(req, res) {
  await categoryModel.find((err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function findOne(req, res) {
  const categoryId = req.params.id;
  await categoryModel.findById(categoryId, (err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function update(req, res) {
  const id = req.params.id
  const filter = { _id: id };
  const category = req.body.category

  let categoryUpdated = await categoryModel.updateOne(filter, {$set:category})
  res.json({ categoryUpdated })
}

async function createTypeProduct(req, res){
  let typeProductReq = req.body.typeProduct
  const typeProduct = new typeProductModel(typeProductReq)
  await typeProduct.save((err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

module.exports = {
  create,
  findAll,
  findOne,
  update,
  createTypeProduct
}