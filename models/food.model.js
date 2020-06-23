const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name : {type:String,required:true},
  desc: {type:String,required:true},
  price : {type:Number,required:true},
  quantity : {type:Number,required:true},
  category: { type: mongoose.Schema.Types.ObjectId, ref:'Category',required:true}
})

module.exports = mongoose.model('Food',foodSchema)