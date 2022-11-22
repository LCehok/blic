import express from "express"
import bodyParser from "body-Parser"
import { MongoClient, ServerApiVersion,} from 'mongodb';


const app = express()
const port = 3000
app.use(bodyParser.json())

const uri = "mongodb+srv://coll1:12341234@webappstest.netsfek.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

let db = null
export default () => { return new Promise((resolve, reject) => {

    if(db && client.isConnected){
        resolve(db)
    }
    else{
    client.connect(err => {
        if(err){
            reject("Failed" + err)
        }
        else{
            console.log("Database Connected Sucessfuly")
            db = client.db("0")
            resolve(db)
        }
        
    })

    }
}
)}