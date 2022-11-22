import express from "express"
import bodyParser from "body-Parser"
import connect from './db.js'
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

app.get('/vratiKorisnike', (req,res) => {
  
  
  res.json(tempStorage)


})

app.post('/saveItem', (req,res) => {
  let data = req.body
  let db = await connect()
  let cursor = await db.collection("coll").find()
  let results = await cursor.insertMany(data)

  tempStorage.push(data)
  res.json(data)
})








app.listen(port,console.log(`Listening on port : ${port}`))
