const { slideInfoModel } = require('../model')

async function create(req, res) {
  let slideInfoReq = req.body.slideInfo
  slideInfoModel.create(slideInfoReq, (err, data) => {
    if(err) res.status(422).json(err)
    res.json(data)
  })
}

async function index(req, res){
  await slideInfoModel.find((err, data)=>{
    if(err) res.status(422).json(err)
    res.json(data)
  })
}

async function findOne(req, res){
  const id = req.params.id;
  await slideInfoModel.findById(id, (err, data) => {
    if (err) res.json(err)
    res.json(data)
  })
}

async function update(){
  const id = req.params.id
  const filter = { _id: id };
  const slide = req.body.slideInfo

  let slideUpdated = await productModel.updateOne(filter, {$set:slide})
  res.json({ slideUpdated })
}

module.exports = {
  create,
  index,
  findOne,
  update
}