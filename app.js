const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT

//import routes
const food = require('./routers/food')
const category = require('./routers/category')

//mongo connection
mongoose.connect(
  "mongodb+srv://cluster0-baqx2.mongodb.net?retryWrites=true&w=majority",
  {
    dbName : process.env.dbName,
    user : process.env.user,
    pass: process.env.pass,
    useNewUrlParser:true,
    useUnifiedTopology:true
  }
).then(_=>{
  console.log("connected db..")
}).catch(err=>{
  console.log(err)
})

//middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//routers
app.use('/food',food)
app.use('/category',category)

app.listen(PORT,_=>{
  console.log(`localServer running at ${PORT}`)
})