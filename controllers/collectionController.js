const { productModel } = require('../model')

async function getProductByType(req, res) {
  const type = req.body.type
  const listProduct = await productModel.find({type: type, status: 100})
  res.json(listProduct)
}



module.exports = {
  getProductByType
}