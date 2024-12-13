import express, { Request, Response } from 'express'
import cors from 'cors'
import "dotenv/config"
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("connected to database"))
const app = express()
app.use(express.json())
app.use(cors())

app.get("/test", async (req: Request, res: Response)=> {
    res.json({message: "Test Successful"})
})

app.listen(3000, ()=> {console.log("listening on port 3000")})