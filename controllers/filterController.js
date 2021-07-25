const { productModel, categoryModel } = require('../model')

async function generateFilterSearch(query) {
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
  if (query.category) {
    const category = await categoryModel.findOne({ name: query.category })
    filter.categoryId = category.id
  }
  return filter
}

async function search(req, res) {
  let perPage = 6, page = Math.max(0, req.params.page)
  const filter = await generateFilterSearch(req.query)
  const dataFilter = await productModel.find({
    originalPrice: filter.originalPrice,
    category: filter.categoryId
  }).limit(perPage).skip(perPage * page)
  res.json(dataFilter)
}

function generateFilterSort(query) {
  let filter = {}
  if (query.sort_by) {
    const sortBy = query.sort_by.split('-')
    switch (sortBy[1]) {
      case 'descending': {
        sortBy[1] = 1
        break
      }
      case 'ascending': {
        sortBy[1] = -1
        break
      }
      default: {
        throw new Error('type for sort invalid')
      }
    }
    return { [sortBy[0]]: sortBy[1] }
  }
}

async function sort(req, res) {
  const filter = generateFilterSort(req.query)
  let perPage = 6, page = Math.max(0, req.params.page)
  try {
    const products = await productModel.find().sort(filter).limit(perPage).skip(perPage * page)
    res.json(products)

  } catch (error) {
    res.json(error)
  }
}

module.exports = {
  search,
  sort
}