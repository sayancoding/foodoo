const express = require('express')
const router = express.Router()
const Category = require('../models/category.model')
const mongoose = require('mongoose')

router.get('/',(req,res)=>{
  Category.find()
  .exec()
  .then(doc=>{
    if(!!doc){
      res.status(200).json({
        count : doc.length,
        itemCategory : doc
      })
    }else{
      res.status(404).json({
        message : "No valid entity"
      })
    }
  })
  .catch(err=>{
    res.status(500).json({
      error : err
    })
  })
})

router.post('/',(req,res,next)=>{
  const newCategory = new Category({
    _id: new mongoose.Types.ObjectId(),
    name : req.body.name
  })
  newCategory
  .save()
  .then(doc=>{
    res.status(200).json(doc)
  })
  .catch(err=>{
    res.status(404).json({
      error : err
    })
  })
})

module.exports = router