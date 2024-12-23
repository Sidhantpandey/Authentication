import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js"
import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'

const app=express();
const port=process.env.PORT || 5000;
connectDB()

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

// API END POINTS 
app.get("/",(req,res)=>{
    res.send("App is working Perfectly")
})
app.use("/api/auth",authRouter)
app.use("/api/auth",userRouter)

app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})