const mongoose = require('mongoose')
const { Schema } = mongoose

const schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
}

const ItemSchema = new Schema(
  {
    IMEI: String,
    identity: [String],
    b64String: String,
    unixTime: { type: Number }
  },
  schemaOptions
)

ItemSchema.pre('save', function (next) {
  this.unixTime = new Date().getTime()
  next()
})

const Item = mongoose.model('Item', ItemSchema)

module.exports = Item
