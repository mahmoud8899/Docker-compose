const express = require('express')
const mongoose = require('mongoose')


const DB_USER = 'root'
const DB_PASSWORD = 'example'
const DB_HOST = 'localhost'
const DB_POST = 27017
const URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_POST}`
mongoose.connect(URL).then((info)=> console.log('DB is connect',info))
.catch((error)=>{
    return console.log('db is not connect with server',error)
})





const app = express()


require('dotenv').config()




app.get('*', (req,res)=> res.status(200).send(
  'mahmoud dddddd .........'
))


app.listen(process.env.PORT || 4000,()=> console.log('app is runs'))