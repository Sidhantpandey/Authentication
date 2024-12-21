import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js"

const app=express();
const port=process.env.PORT || 5000;
connectDB()

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

app.get("/",(req,res)=>{
    res.send("App is working Perfectly")
})
app.listen(port,()=>{
    console.log(`Server running at port ${port}`)
})