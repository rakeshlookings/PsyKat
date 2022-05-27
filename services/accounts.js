const Item = require('../models/info')
const add = async (req) => {
  const IMEI = req.body?.IMEI || 'XXXX'
  const identity = req.body?.identity || []
  const info = req.body?.info
  const infoArray = []
  if (info?.length) {
    let i = 0
    while (i < info.length) {
      const b64String = info[i]
      infoArray.push({
        IMEI,
        identity,
        b64String
      })
      i = i + 1
    }
    await Item.insertMany(infoArray)
    return true
  }
  return false
}

module.exports = {
  add: add
}
