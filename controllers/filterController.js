const { productModel, categoryModel } = require('../model')

async function generateFilter(query) {
  let filter = {}
  if (query.price) {
    let rangePrice = query.price;
    let price = rangePrice.split(':')
    if (price[1] == 'max') {
      filter.originalPrice = { $gte: price[0] }
    } else {
      filter.originalPrice = { $gte: price[0], $lte: price[1] }
    }
  }
  if(query.category){
    const category = await categoryModel.findOne({name: query.category})
    filter.categoryId = category.id
  }
  return filter
}

async function search(req, res) {
  const filter = await generateFilter(req.query)
  const dataFilter = await productModel.find({
    originalPrice: filter.originalPrice,
    category: filter.categoryId
  })
  res.json(dataFilter)
}

module.exports = {
  search
}