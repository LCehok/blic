import express from "express"
import bodyParser from "body-Parser"
import connect from './db.js'
import {v4 as uuidv4} from "uuid"

const app = express()
const port = 3000

app.use(bodyParser.json())

let tempStorage = []

app.get('/notes', async (req,res) => {
  let db = await connect()
  let cursor = await db.collection("coll").find()
  let results = await cursor.toArray()


  res.json(tempStorage)

})

app.get('/vratiKorisnike', (req,res) => {
  
  
  res.json(tempStorage)


})

app.post('/dodajKorisnika', (req,res) => {
  let data = req.body
  data["id"] = uuidv4()

  tempStorage.push(data)
  res.json(data)
})








app.listen(port,console.log(`Listening on port : ${port}`))
