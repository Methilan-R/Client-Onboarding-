import express from 'express'
import cors from 'cors'
import ConnectedToDB from './db/db.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

ConnectedToDB()

app.listen(5000,()=>{
    console.log("Server Running on 5000")
})



