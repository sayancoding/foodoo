const express = require('express')
const router = express.Router()
const Food = require('../models/food.model')
const mongoose = require('mongoose')

router.get('/',(req,res)=>{
  Food.find()
  .populate('category',"name")
  .exec()
  .then(doc=>{
    if(doc){
      res.status(200).json({
        count : doc.length,
        items : doc
      })
    }else{
      res.status(404).json(
        {
          error : "no have items"
        }
      )
    }
  })
  .catch(err=>{
    res.status.json({error : err})
  })
})

router.post('/',(req,res)=>{
  const newFood = new Food({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
    quantity : req.body.quantity,
    category : req.body.category
  })
  newFood
  .save()
  .then(doc=>{
    res.status(200).json(doc)
  })
  .catch(err=>{
    res.status(500).json({
      error : err
    })
  })
})

module.exports = router