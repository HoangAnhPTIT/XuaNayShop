const userRouter = require('./userRouter')
const categoryRouter = require('./caterogyRouter')
const productRouter = require('./productRouter')
const homepageRouter = require('./homePageRouter')
const slideInfoRouter = require('./slideInfoRouter')
const filterRouter = require('./filterRouter')

module.exports = [
  userRouter,
  categoryRouter,
  productRouter,
  homepageRouter,
  slideInfoRouter,
  filterRouter
]
