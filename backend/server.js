import express from  'express';
import dotenv from  'dotenv';
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from './routes/message.routes.js'
import cookieParser from 'cookie-parser';
import userRoutes from "./routes/user.routes.js"

import connectToMongoDb from './db/connectToMongodb.js';


const PORT=process.env.PORT||8080
const app=express();
dotenv.config();
app.use(express.json());//parse incoming requests with json payloads and return any results as JSON
app.use(cookieParser());

//for login routes
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
});

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`Server is running on port ${PORT}`)
});