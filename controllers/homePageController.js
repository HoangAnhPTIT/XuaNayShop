const { slideInfoModel, typeProductModel } = require('../model')


async function getFullData(req, res) {
  let fullData = {}
  await slideInfoModel.find((err, data)=>{
    if(err) res.status(422).json(err)
    fullData.slideInfo = data
  })
  await typeProductModel.find((err, data)=>{
    if(err) res.status(422).json(err)
    console.log(data);
    fullData.typeProduct = data
  })

  res.json(fullData)
}

module.exports = {
  getFullData
}