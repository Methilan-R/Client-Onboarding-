import express from 'express'
import cors from 'cors'
import ConnectedToDB from './db/db.js'
import dotenv from 'dotenv'
import clientRoutes from './routes/client.js'
dotenv.config()
const app = express()
app.use(cors({
  origin: ["https://client-onboarding-nd4z.vercel.app"],
  methods: ["POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json())

app.use('/api',clientRoutes)
ConnectedToDB()

app.get('/',(req,res)=>{
    return res.send("Backend is Running")
})

app.listen(5000,()=>{
    console.log("Server Running on 5000")
})



