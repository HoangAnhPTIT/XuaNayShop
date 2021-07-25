const { slideInfoModel, productModel, categoryModel, typeChildModel } = require('../model')
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

async function getClockProductByType(typeChildClock) {
  let clockProduct = await categoryModel.findOne({ code: "CLOCK" }).populate({
    path: 'product',
    select: typeProductRes,
    match: { childType: `${typeChildClock}` }
  })
  return clockProduct
}

async function getTypeChildProduct(categoryCode) {
  try {
    let typeChildProducts = await typeChildModel.find({}, 'typeChild')
      .populate('typeParent',
        { match: { code: 123 } })
    return typeChildProducts.map(x => {
      return x.typeChild
    })
  } catch (err) {
    throw new Error('Err')
  }

}

async function getClockProduct() {
  let clockProduct = []
  let typeChildClock = await getTypeChildProduct('CLOCK')
  for (const typeChild of typeChildClock) {
    let productByType = await getClockProductByType(typeChild)
    clockProduct.push({ [typeChild]: productByType.product })
  }

  return clockProduct 
}

async function getGiftProduct() {
  let giftProduct = await categoryModel.findOne({ code: "GIFT" }).populate({
    path: 'product',
    select: typeProductRes
  })
  return giftProduct
}

async function getFullData(req, res) {
  const banners = await getSlideInfo(res)
  const typeProducts = getTypeProduct();
  const highlightProducts = await getHighlightProduct()
  const clockProducts = await getClockProduct()
  const giftProducts = await getGiftProduct()
  const homePageData = { banners, typeProducts, highlightProducts, clockProducts, giftProducts }
  res.json(homePageData)
}

module.exports = {
  getFullData
}