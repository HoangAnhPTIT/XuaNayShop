const { slideInfoModel, productModel, categoryModel, typeChildModel } = require('../model')
const typeProductEnum = require('../model/typeProductEnum')

const typeProductRes = '_id title images originalPrice promotedPrice amountquantityPurchased name type childType'

async function getSlideInfo(res) {
  try {
    let slideInfo = []
    await slideInfoModel.find((err, data) => {
      if (err) res.status(422).json(err)
      slideInfo = data
    })
    return slideInfo
  } catch (error) {
    throw error
  }

}

function getTypeProduct() {
  let typeProduct = []
  for (const [key, value] of Object.entries(typeProductEnum)) {
    typeProduct.push(typeProductEnum[key])
  }
  return typeProduct
}

async function getHighlightProduct() {
  try {
    const highLightProduct = await productModel.find({ status: 100 }, typeProductRes).sort({ 'quantityPurchased': -1 }).limit(6)
    return highLightProduct;
  } catch (error) {
    throw error
  }
}

async function getClockProductByType(typeChildClock, categoryName) {
  try {
    let clockProduct = await categoryModel.findOne({ code: categoryName }).populate({
      path: 'product',
      select: typeProductRes,
      match: { childType: `${typeChildClock}` }
    })
    return clockProduct
  } catch (error) {
    throw error
  }
}

async function getTypeChildProduct(categoryCode) {
  try {
    let typeChildProducts = await typeChildModel.find({}, 'typeChild')
      .populate(
        {
          path: 'typeParent',
        })
        typeChildProducts = typeChildProducts.filter( x => x.typeParent.code == categoryCode)
    return typeChildProducts.map(x => x.typeChild)
  } catch (err) {
    throw err
  }
}

async function getProductWithCategory(category) {
  let clockProduct = {}
  try {
    let typeChildProducts = await getTypeChildProduct(category)
    let listProduct = {}
    for (const typeChild of typeChildProducts) {
      let productByType = await getClockProductByType(typeChild, category)
      listProduct[typeChild] = productByType.product
    }
    clockProduct.listProduct = listProduct
    clockProduct.typeChildProducts = typeChildProducts

    return clockProduct
  } catch (error) {
    throw error
  }

}

async function getFullData(req, res) {
  try {
    const banners = await getSlideInfo(res)
    const highlightProducts = await getHighlightProduct()
    const clockProducts = await getProductWithCategory('CLOCK')
    const giftProducts = await getProductWithCategory('GIFT')
    const homePageData = { banners, highlightProducts, clockProducts, giftProducts }
    res.json(homePageData)
  } catch (error) {
    res.status(422).json(error)
  }
}

async function getOriginTypeProduct(req, res){
  try{
    const typeProducts = getTypeProduct();
    res.json(typeProducts)
  } catch(error){
    res.status(422).json(error)
  }
}

module.exports = {
  getFullData,
  getOriginTypeProduct
}