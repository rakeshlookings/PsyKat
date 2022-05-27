const service = require('../services/accounts')

const add = async (req, res) => {
  try {
    const response = await service.add(req)
    return res.send(response)
  } catch (e) {
    return res.send({ success: false, message: e.message })
  }
}

module.exports = {
  add: add
}
