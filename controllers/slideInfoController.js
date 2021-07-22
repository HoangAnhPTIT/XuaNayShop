const { slideInfoModel } = require('../model')

async function create(req, res){
  let slideInfo = req.body.slideInfo
  slideInfoModel.create(slideInfo, (err, data) => {
    if (err) res.status(422).json(err)
    res.json(data)
  })
}

async function index(req, res){
  const slideInfos = await slideInfoModel.find()
  res.json(slideInfos)
}


module.exports = {
  create,
  index
}