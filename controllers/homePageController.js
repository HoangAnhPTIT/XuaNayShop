const { slideInfoModel, productModel, categoryModel } = require('../model')
const typeProductEnum = require('../model/typeProductEnum')

const typeProductRes = '_id title images originalPrice promotedPrice amountquantityPurchased name type childType'

async function getSlideInfo(res) {
  let slideInfo = []
  await slideInfoModel.find((err, data) => {
    if (err) res.status(422).json(err)
    slideInfo = data
  })
  return slideInfo
}

function getTypeProduct() {
  let typeProduct = []
  for (const [key, value] of Object.entries(typeProductEnum)) {
    typeProduct.push(typeProductEnum[key])
  }
  return typeProduct
}

async function getHighlightProduct() {
  const highLightProduct = await productModel.find({ status: 100 }, typeProductRes).sort({ 'quantityPurchased': -1 }).limit(6)
  return highLightProduct;
}

async function getClockProduct() {
  let clockProduct = await categoryModel.findOne({code: "CLOCK"}).populate({
    path: 'product',
    select: typeProductRes,
    match: {childType: 'A'}
  })
  const listTypeChild = ['A', 'B', 'C']
  return {clockProduct, listTypeChild}
}

async function getGiftProduct(){
  let giftProduct = await categoryModel.findOne({code: "GIFT"}).populate({
    path: 'product',
    select: typeProductRes
  })
  return giftProduct
}

async function getFullData(req, res) {
  const slideInfos = await getSlideInfo(res)
  const typeProduct = getTypeProduct();
  const highlightProduct = await getHighlightProduct()
  const clockProduct = await getClockProduct()
  const giftProduct = await getGiftProduct()
  const homePageData = { slideInfos, typeProduct, highlightProduct, clockProduct, giftProduct }
  res.json(homePageData)
}

module.exports = {
  getFullData
}